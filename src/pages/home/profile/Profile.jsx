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
  scanQrcode = () => {
    wx.ready(function(){
      // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
      window.wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
          console.log(result)
        }
      })
    })
  }

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

        <div>
          <button onClick={this.scanQrcode}>扫码</button>
        </div>
      </div>
    )
  }
}

export default Profile