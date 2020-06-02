import * as actionTypes from './actionTypes'

export const login = (email, password) => ({
  types: [
    actionTypes.LOGIN,
    actionTypes.LOGIN_SUCCESS,
    actionTypes.LOGIN_FAIL,
  ],
  promise: (client) => client.post('sign_in', { data: { user: { email, password } } })
})

export const logout = (refreshToken) => ({
  types: [
    actionTypes.LOGOUT,
    actionTypes.LOGOUT_SUCCESS,
    actionTypes.LOGOUT_FAIL
  ],
  promise: (client) => client.delete('sign_out')
})

export const me = () => ({
  types: [
    actionTypes.ME,
    actionTypes.ME_SUCCESS,
    actionTypes.ME_FAIL,
  ],
  promise: (client) => client.get('users/me')
})

