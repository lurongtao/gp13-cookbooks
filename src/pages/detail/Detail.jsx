import React, { Component } from 'react'
import ListView from './ListView'
import test from './test'
export default class Detail extends Component {
  render() {
    return (
      <div>
        <ListView
          renderRow={test}
        ></ListView>
      </div>
    )
  }
}
