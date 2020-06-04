import { combineReducers } from 'redux'

import entities from './entities'
import collections from './collections'
import auth from './auth'

export default combineReducers({
  entities,
  collections,
  auth,
})
