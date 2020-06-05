import { combineReducers } from 'redux'

import entities from './entities'
import collections from './collections'
import thoughts from './thoughts'
import lists from './lists'
import auth from './auth'

export default combineReducers({
  entities,
  collections,
  thoughts,
  lists,
  auth,
})
