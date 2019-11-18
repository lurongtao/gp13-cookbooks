import { LOADDATA } from './actionTypes'
import { Map, List } from 'immutable'

const defaultState = Map({
  list: List([])
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
      return state.set('list', state.get('list').concat(action.list))
    default:
      return state
  }
}