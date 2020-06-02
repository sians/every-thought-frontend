import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectors as authSelectors } from '../store/reducers/auth'

import LoginPage from '../pages/Login'

const NonAuthenticatedRoute = (routeProps) => {
  const authenticated = useSelector(authSelectors.isAuthenticated)

  return (
    authenticated ?
      <Redirect to="/" />
      :
      <LoginPage />
  )
}

export default NonAuthenticatedRoute
