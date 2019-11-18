import { asyncLoadData } from '../../../actionCreator'

export default {
  mapState: (state) => {
    return {
      list: state.getIn(['cookbook', 'list'])
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