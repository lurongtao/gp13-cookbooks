import React, { Component } from 'react'
export default class Map extends Component {
  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <iframe src="/map.html" title="ifrm" frameBorder="0" style={{width: '100%', height: '100%'}}></iframe>
      </div>
    )
  }
}
