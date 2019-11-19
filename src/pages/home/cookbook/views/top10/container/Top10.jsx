import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Top10UI from '../ui/Top10UI'

const mapState = (state) => {
  return {
    list: state.getIn(['cookbook', 'list'])
  }
}

const Top10 = (props) => {
  const handleItemClick = useCallback(
    () => {
      props.history.push('/detail')
    },
    [props.history],
  )
  return (
    <Top10UI onItemClick={handleItemClick} { ...props }></Top10UI>
  )
}

export default withRouter(connect(mapState)(Top10))