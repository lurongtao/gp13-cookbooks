import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Top10UI from '../ui/Top10UI'

const mapState = (state) => {
  return {
    list: state.getIn(['cookbook', 'list'])
  }
}

@connect(mapState)
@withRouter
class Top10 extends Component {
  async componentDidMount() {
    
  }

  handleItemClick = () => {
    this.props.history.push('/detail')
  }

  render() {
    return (
      <Top10UI onItemClick={this.handleItemClick} { ...this.props }></Top10UI>
    )
  }
}

export default Top10