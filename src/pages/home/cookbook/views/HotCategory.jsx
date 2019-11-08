import React, { Component } from 'react'
import { Grid } from 'antd-mobile'

export default class HotCategory extends Component {
  state = {
    data1: Array.from(new Array(9)).map((_val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `name${i}`,
    }))
  }

  render() {
    return (
      <div>
        <Grid 
          data={this.state.data1}
          columnNum={3}
          renderItem={dataItem => (
            <div style={{ padding: '12.5px' }}>
              <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
              <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                <span>I am title..</span>
              </div>
            </div>
          )}
        />
      </div>
    )
  }
}
