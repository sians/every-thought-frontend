import React, { useEffect, useState, useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'

import { actions as authActions, selectors as authSelectors } from './store/reducers/auth'

import Router from './navigation/Router'

import AppLoading from './pages/AppLoading'

import './styles/main.scss'

const App = () => {

  const dispatch = useDispatch();

  const [pathName, setPathname] = useState('')

  useEffect(() => {
    if (Cookies.get('authorization-header-frontend')) {
      console.log("here")
      console.log(Cookies)
      dispatch(authActions.me())
    }
  }, [])

  const meLoading = useSelector(authSelectors.getMeLoading)
  const authenticated = useSelector(authSelectors.isAuthenticated)

  const appReady = useMemo(() => !meLoading, [meLoading])

  const handleRoutePathName = (pathName) => {
    setPathname(pathName)
  }

  return (
    <BrowserRouter>
      { appReady ?
        <>
          <div className="app">
            <div className="app-content">
              <Router setRoutePathName={handleRoutePathName} />
            </div>
          </div>
        </>
        :
        <AppLoading />
      }
    </BrowserRouter>
  );

}

export default App;
