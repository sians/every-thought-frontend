import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import clientMiddleware from './middlewares/clientMiddleware'

import ApiClient from './client'
import rootReducer from './reducers'

const client = new ApiClient()

const enhancers = []
const middleware = [
  clientMiddleware(client),
]

const composeEnhancers = composeWithDevTools({})

const composedEnhancers = composeEnhancers(
  applyMiddleware(...middleware),
  ...enhancers
)
const initializeStore = (initialState = {}) => {
  return createStore(rootReducer, initialState, composedEnhancers)
}

export default initializeStore
