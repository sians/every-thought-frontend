import produce from 'immer'

import * as actionTypes from './actionTypes'

const initialState = {
  thoughts: [],
  thoughtsLoading: false,
  thoughtsError: null,
}

const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {

    // GET THOUGHTS
    case actionTypes.GET_THOUGHTS:
        draft.thoughtsLoading = true
        break
        case actionTypes.GET_THOUGHTS_SUCCESS:
        draft.thoughtsLoading = false
        draft.thoughts = action.result.data.map((d) => d.id)
        break
        case actionTypes.GET_THOUGHTS_FAIL:
        draft.thoughtsLoading = false
        draft.thoughtsError = { status: action.error.status }
        break

    // GET THOUGHT
    case actionTypes.GET_THOUGHT:
        draft.thoughtLoading = true
        break
    case actionTypes.GET_THOUGHT_SUCCESS:
        let fetchedThought = draft.thoughts.find(colId => colId === action.result.data.id)

        draft.thoughtLoading = false
        if (!fetchedThought) {
        draft.thoughts = [action.result.data.id].concat(draft.thoughts)
        }
        break
    case actionTypes.GET_THOUGHT_FAIL:
        draft.thoughtLoading = false
        draft.thoughtError = { status: action.error.status }
        break

    // CREATE THOUGHT
    case actionTypes.CREATE_THOUGHT:
        draft.createThought = true
        break
    case actionTypes.CREATE_THOUGHT_SUCCESS:
        draft.createThought = false
        draft.thoughts = [action.result.data.id].concat(draft.thoughts)
        break
    case actionTypes.CREATE_THOUGHT_FAIL:
        draft.createThought = false
        draft.createThoughtError = { status: action.error.status }
        break        

      default:
        break
    }
  })
}

export default reducer
