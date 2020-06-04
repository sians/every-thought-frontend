import * as actionTypes from './actionTypes'

export const getCollections = () => ({
  types: [
    actionTypes.GET_COLLECTIONS,
    actionTypes.GET_COLLECTIONS_SUCCESS,
    actionTypes.GET_COLLECTIONS_FAIL,
  ],
  promise: (client) => client.get('collections')
})

export const getCollection = (id) => ({
  types: [
    actionTypes.GET_COLLECTION,
    actionTypes.GET_COLLECTION_SUCCESS,
    actionTypes.GET_COLLECTION_FAIL,
  ],
  promise: (client) => client.get(`collections/${id}`)
})

export const createCollection = (name) => ({
  types: [
    actionTypes.CREATE_COLLECTION,
    actionTypes.CREATE_COLLECTION_SUCCESS,
    actionTypes.CREATE_COLLECTION_FAIL,
  ],
  promise: (client) => client.post(
    'collections',
    { data: { collection: { name } } })
})