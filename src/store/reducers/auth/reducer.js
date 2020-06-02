import produce from 'immer'

import * as actionTypes from './actionTypes'

const initialState = {
  user: null,
  loginLoading: false,
  logoutLoading: false,
  meLoading: false,
  acceptInvitationLoading: false,
  loginError: null,
  logoutError: null,
  meError: null,
  acceptInvitationError: null,
}

const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      // Login
      case actionTypes.LOGIN:
        draft.loginLoading = true
        break
      case actionTypes.LOGIN_SUCCESS:
        draft.loginLoading = false
        draft.user = action.result.data.attributes
        break
      case actionTypes.LOGIN_FAIL:
        draft.loginLoading = false
        draft.loginError = { status: action.error.status }
        break

      // Logout
      case actionTypes.LOGOUT:
        draft.logoutLoading = true
        break
      case actionTypes.LOGOUT_SUCCESS:
        draft.logoutLoading = false
        draft.user = null
        break
      case actionTypes.LOGOUT_FAIL:
        draft.logoutLoading = false
        draft.logoutError = action.result
        break

      // Me
      case actionTypes.ME:
        draft.meLoading = true
        break
      case actionTypes.ME_SUCCESS:
        draft.meLoading = false
        draft.user = action.result.data.attributes
        break
      case actionTypes.ME_FAIL:
        draft.meLoading = false
        draft.meError = { status: action.error.status }
        break

      default:
        break;
    }
  })
}

export default reducer
