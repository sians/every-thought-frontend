import produce from 'immer'

import * as actionTypes from './actionTypes'

const initialState = {
  lists: [],
  listsLoading: false,
  listsError: null,
}

const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {

    // GET LISTS
    case actionTypes.GET_LISTS:
        draft.listsLoading = true
        break
        case actionTypes.GET_LISTS_SUCCESS:
        draft.listsLoading = false
        draft.lists = action.result.data.map((d) => d.id)
        break
        case actionTypes.GET_LISTS_FAIL:
        draft.listsLoading = false
        draft.listsError = { status: action.error.status }
        break

    // GET LIST
    case actionTypes.GET_LIST:
        draft.listLoading = true
        break
    case actionTypes.GET_LIST_SUCCESS:
        let fetchedList = draft.lists.find(colId => colId === action.result.data.id)

        draft.listLoading = false
        if (!fetchedList) {
        draft.lists = [action.result.data.id].concat(draft.lists)
        }
        break
    case actionTypes.GET_LIST_FAIL:
        draft.listLoading = false
        draft.listError = { status: action.error.status }
        break

    // CREATE LIST
    case actionTypes.CREATE_LIST:
        draft.createList = true
        break
    case actionTypes.CREATE_LIST_SUCCESS:
        draft.createList = false
        draft.lists = [action.result.data.id].concat(draft.lists)
        break
    case actionTypes.CREATE_LIST_FAIL:
        draft.createList = false
        draft.createListError = { status: action.error.status }
        break        

      default:
        break
    }
  })
}

export default reducer
