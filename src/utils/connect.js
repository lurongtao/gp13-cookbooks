import { connect } from 'react-redux'

export default ({mapState, mapDispatch = null}) => {
  return connect(mapState, mapDispatch)
}