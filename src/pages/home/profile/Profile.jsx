import React, { Component } from 'react'

import { Switch } from 'antd-mobile'

import connect from 'utils/connect'

import { switchSync } from '../layout/'

@connect({
  mapState: (state) => {
    return {
      checked: state.getIn(['layout', 'checked'])
    }
  },
  mapDispatch: (dispatch) => {
    return {
      onSwitch(checked) {
        dispatch(switchSync(checked))
      }
    }
  }
})
class Profile extends Component {
  render() {
    return (
      <div style={{padding: '20px'}}>
        是否显示地图：
        <Switch
          checked={this.props.checked}
          onChange={(value) => {
            this.props.onSwitch(value)
          }}
        />
      </div>
    )
  }
}

export default Profile