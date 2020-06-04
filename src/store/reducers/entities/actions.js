import * as actionTypes from './actionTypes'

export const reset = () => (
  (dispatch) => {
    dispatch({ type: actionTypes.RESET })
  }
)
