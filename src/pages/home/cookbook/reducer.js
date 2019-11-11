import { LOADDATA } from './actionTypes'

const defaultState = {
  list: []
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
      return {
        list: [
          ...state.list,
          ...action.list
        ]
      }
    default:
      return state
  }
}