import { SWITCHTAB } from './actionTypes'
import store from 'store'

let checked = store.get('checked')
const defaultState = {
  checked: checked !== undefined ? checked : true
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case SWITCHTAB:
      store.set('checked', action.checked)
      return {
        checked: action.checked
      }
    default:
      return state
  }
}