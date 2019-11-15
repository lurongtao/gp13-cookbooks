import { combineReducers } from 'redux'
import { reducer as list } from 'pages/home/cookbook/'
import { reducer as layout } from 'pages/home/layout/'

export default combineReducers({
  cookbook: list,
  layout
})