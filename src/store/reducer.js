// import { combineReducers } from 'redux'
import {
  combineReducers
} from 'redux-immutable'
import { reducer as list } from 'pages/home/cookbook/'
import { reducer as layout } from 'pages/home/layout/'

export default combineReducers({
  cookbook: list,
  layout
})