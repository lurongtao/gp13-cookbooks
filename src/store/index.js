import { 
  createStore,
  applyMiddleware
} from 'redux'

import { Map } from 'immutable'

import thunk from 'redux-thunk'

import reducer from './reducer'

const initState = Map({})

const store = createStore(
  reducer,
  initState,
  applyMiddleware(thunk)
)

export default store
