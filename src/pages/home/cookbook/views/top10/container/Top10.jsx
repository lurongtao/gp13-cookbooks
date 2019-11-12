import React, { Component } from 'react'
import { connect } from 'react-redux'

import Top10UI from '../ui/Top10UI'

const mapState = (state) => {
  return {
    list: state.cookbook.list
  }
}

class Top10 extends Component {
  async componentDidMount() {
    
  }

  render() {
    return (
      <Top10UI { ...this.props }></Top10UI>
    )
  }
}

export default connect(mapState)(Top10)