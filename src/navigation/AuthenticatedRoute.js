import React, { useCallback } from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectors as authSelectors } from '../store/reducers/auth'

import Login from '../pages/Login'

const AuthenticatedRoute = (routeProps) => {
  const authenticated = useSelector(authSelectors.isAuthenticated)

  return (
    authenticated ?
      <Route {...routeProps} />
      :
      <Login />
  )
}

export default AuthenticatedRoute
