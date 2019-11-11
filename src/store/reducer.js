import { combineReducers } from 'redux'
import { reducer as list } from 'pages/home/cookbook/'

export default combineReducers({
  cookbook: list
})