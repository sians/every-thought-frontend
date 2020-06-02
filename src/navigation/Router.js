import React, { useEffect } from 'react'
import { Switch, Redirect, useLocation } from 'react-router-dom'

import AuthenticatedRoute from './AuthenticatedRoute'
import NonAuthenticatedRoute from './NonAuthenticatedRoute'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'


const Router = ({ setRoutePathName }) => {
  const location = useLocation()

  function usePageViews() {
    useEffect(() => {
      setRoutePathName(location.pathname)
    }, [location])
  }

  usePageViews(setRoutePathName)

  return (
    <Switch location={location}>
        <AuthenticatedRoute path="/" exact component={Dashboard} />

        <NonAuthenticatedRoute path="/login" exact component={Login} />

        <Redirect from="*" to="/" />
    </Switch>
  )
}

export default Router
