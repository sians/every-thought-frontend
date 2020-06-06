import * as actionTypes from './actionTypes'

export const getThoughts = () => ({
  types: [
    actionTypes.GET_THOUGHTS,
    actionTypes.GET_THOUGHTS_SUCCESS,
    actionTypes.GET_THOUGHTS_FAIL,
  ],
  promise: (client) => client.get('thoughts')
})

export const getThought = (id) => ({
  types: [
    actionTypes.GET_THOUGHT,
    actionTypes.GET_THOUGHT_SUCCESS,
    actionTypes.GET_THOUGHT_FAIL,
  ],
  promise: (client) => client.get(`thoughts/${id}`)
})

export const createThought = (name) => ({
  types: [
    actionTypes.CREATE_THOUGHT,
    actionTypes.CREATE_THOUGHT_SUCCESS,
    actionTypes.CREATE_THOUGHT_FAIL,
  ],
  promise: (client) => client.post(
    'thoughts',
    { data: { thought: { title: 'untitled' } } })
})