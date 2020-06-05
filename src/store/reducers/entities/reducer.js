import produce from 'immer'

import * as actionTypes from './actionTypes'
import {
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTION_SUCCESS,
  UPDATE_COLLECTION_SUCCESS,
  CREATE_COLLECTION_SUCCESS,
} from '../collections/actionTypes'
import {
  GET_LISTS_SUCCESS,
  GET_LIST_SUCCESS,
  CREATE_LIST_SUCCESS,
  UPDATE_LIST_SUCCESS,
} from '../lists/actionTypes'
import {
  GET_THOUGHTS_SUCCESS,    
  GET_THOUGHT_SUCCESS,
  CREATE_THOUGHT_SUCCESS,
  UPDATE_THOUGHT_SUCCESS,
} from '../thoughts/actionTypes'

const initialState = {
  lists: {},
  collections: {},
  thoughts: {},
}

const normalizeArray = (arr) => {
  const normalized = {}
  Object.keys(arr).forEach((key) => {
    const { id, attributes, relationships } = arr[key]

    const relationshipsAttributes = {}
    if (relationships) {
      Object.keys(relationships).forEach((key) => {
        const relationship = relationships[key].data
        if (relationship) {
          relationshipsAttributes[key] = relationship instanceof Array ? relationship.map((a) => a.id) : relationship.id
        }
      })
    }

    normalized[id] = { id, ...attributes, ...relationshipsAttributes }
  })

  return normalized
}

const updateEntitiesData = (state, draft, entity, dataKey, data) => {
  const entityData = data[dataKey]

  if (entityData) {
    draft[entity] = {
      ...state[entity],
      ...normalizeArray(entityData)
    }
  }
}

const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      // UPDATE ENTITIES DATA
      case GET_COLLECTIONS_SUCCESS:
      case GET_COLLECTION_SUCCESS:
      case CREATE_COLLECTION_SUCCESS:
      case UPDATE_COLLECTION_SUCCESS:
      case GET_LISTS_SUCCESS:
      case GET_LIST_SUCCESS:
      case CREATE_LIST_SUCCESS:
      case UPDATE_LIST_SUCCESS:
      case GET_THOUGHTS_SUCCESS:    
      case GET_THOUGHT_SUCCESS:
      case CREATE_THOUGHT_SUCCESS:
      case UPDATE_THOUGHT_SUCCESS:
        const data = action.result.normalizedData
        updateEntitiesData(state, draft, 'collections', 'collection', data)
        updateEntitiesData(state, draft, 'lists', 'list', data)
        updateEntitiesData(state, draft, 'thoughts', 'thought', data)
        break

      case actionTypes.RESET:
        draft.entities = initialState.entities
        break

      default:
        break;
    }
  })
}

export default reducer
