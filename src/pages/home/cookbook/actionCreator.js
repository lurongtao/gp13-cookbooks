import { LOADDATA } from './actionTypes'
import http from 'utils/http.js'

const syncLoadData = list => ({
  type: LOADDATA,
  list
})

const asyncLoadData = () => {
  return async (dispatch) => {
    let list = await http.get('/api/list')
    dispatch(
      syncLoadData(list.data)
    )
  }
}

export {
  syncLoadData,
  asyncLoadData
}