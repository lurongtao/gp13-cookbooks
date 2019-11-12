import { connect } from 'react-redux'

export default ({mapState, mapDispatch}) => {
  return connect(mapState, mapDispatch)
}