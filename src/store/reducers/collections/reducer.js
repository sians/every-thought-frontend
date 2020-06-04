import produce from 'immer'

import * as actionTypes from './actionTypes'

const initialState = {
  collections: [],
  collectionsLoading: false,
  collectionsError: null,
}

const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {

    // GET COLLECTIONS
    case actionTypes.GET_COLLECTIONS:
        draft.collectionsLoading = true
        break
        case actionTypes.GET_COLLECTIONS_SUCCESS:
        draft.collectionsLoading = false
        draft.collections = action.result.data.map((d) => d.id)
        break
        case actionTypes.GET_COLLECTIONS_FAIL:
        draft.collectionsLoading = false
        draft.collectionsError = { status: action.error.status }
        break

    // GET COLLECTION
    case actionTypes.GET_COLLECTION:
        draft.collectionLoading = true
        break
    case actionTypes.GET_COLLECTION_SUCCESS:
        let fetchedCollection = draft.collections.find(colId => colId === action.result.data.id)

        draft.collectionLoading = false
        if (!fetchedCollection) {
        draft.collections = [action.result.data.id].concat(draft.collections)
        }
        break
    case actionTypes.GET_COLLECTION_FAIL:
        draft.collectionLoading = false
        draft.collectionError = { status: action.error.status }
        break

    // CREATE COLLECTION
    case actionTypes.CREATE_COLLECTION:
        draft.createCollection = true
        break
    case actionTypes.CREATE_COLLECTION_SUCCESS:
        draft.createCollection = false
        draft.collections = [action.result.data.id].concat(draft.collections)
        break
    case actionTypes.CREATE_COLLECTION_FAIL:
        draft.createCollection = false
        draft.createCollectionError = { status: action.error.status }
        break        

      default:
        break
    }
  })
}

export default reducer
