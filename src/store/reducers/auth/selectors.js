import { createSelector } from 'reselect'

export const getUser = createSelector([
  (state) => state.auth.user
],
  (user) => user
)

export const isAuthenticated = createSelector([
  (state) => !!state.auth.user
],
  (authenticated) => authenticated
)

export const getLoginLoading = createSelector([
  (state) => state.auth.loginLoading
],
  (loading) => loading
)

export const getLogoutLoading = createSelector([
  (state) => state.auth.logoutLoading
],
  (loading) => loading
)

export const getMeLoading = createSelector([
  (state) => state.auth.meLoading
],
  (loading) => loading
)

export const getLoginError = createSelector([
  (state) => state.auth.loginError
],
  (error) => error
)

export const getLogoutError = createSelector([
  (state) => state.auth.logoutError
],
  (error) => error
)

export const getMeError = createSelector([
  (state) => state.auth.meError
],
  (error) => error
)
