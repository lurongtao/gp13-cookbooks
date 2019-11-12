import { asyncLoadData } from '../../../actionCreator'

export default {
  mapState: (state) => {
    return {
      list: state.cookbook.list
    }
  },
  mapDispatch: (dispatch) => {
    return {
      loadData() {
        dispatch(asyncLoadData())
      }
    }
  }
}