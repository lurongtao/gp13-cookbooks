import React, { Component } from 'react'

import HeaderUI from './HeaderUI'

export default class HeaderContainer extends Component {
  state = {
    type: 'category'
  }

  handleClick = (type) => {
    this.setState({
      type
    })
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
