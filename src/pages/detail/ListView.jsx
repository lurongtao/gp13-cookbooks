import React, { Component } from 'react'

export default class ListView extends Component {
  render() {
    return (
      <div>
        {this.props.renderRow('aa')}
      </div>
    )
  }
}
