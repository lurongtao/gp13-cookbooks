import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import HeaderUI from './HeaderUI'

@withRouter
class HeaderContainer extends Component {
  state = {
    type: 'category'
  }

  handleClick = (type) => {
    this.setState({
      type
    })
    this.props.history.push('/index/' + type)
  }

  render() {
    return (
      <HeaderUI 
        type={this.state.type} 
        onSwitch={this.handleClick}
      ></HeaderUI>
    )
  }
}

export default HeaderContainer