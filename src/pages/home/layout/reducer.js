import { SWITCHTAB } from './actionTypes'
import { Map } from 'immutable'
import store from 'store'

let checked = store.get('checked')
const defaultState = Map({
  checked: checked !== undefined ? checked : true
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case SWITCHTAB:
      store.set('checked', action.checked)
      return state.set('checked', action.checked)
    default:
      return state
  }
}