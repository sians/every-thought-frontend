import * as actionTypes from './actionTypes'

export const getLists = () => ({
  types: [
    actionTypes.GET_LISTS,
    actionTypes.GET_LISTS_SUCCESS,
    actionTypes.GET_LISTS_FAIL,
  ],
  promise: (client) => client.get('lists')
})

export const getList = (id) => ({
  types: [
    actionTypes.GET_LIST,
    actionTypes.GET_LIST_SUCCESS,
    actionTypes.GET_LIST_FAIL,
  ],
  promise: (client) => client.get(`lists/${id}`)
})

export const createList = (name) => ({
  types: [
    actionTypes.CREATE_LIST,
    actionTypes.CREATE_LIST_SUCCESS,
    actionTypes.CREATE_LIST_FAIL,
  ],
  promise: (client) => client.post(
    'lists',
    { data: { List: { name } } })
})