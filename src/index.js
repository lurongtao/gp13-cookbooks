import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/reset.css'
import './assets/styles/animation.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

import './mock/mockjs'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.wx.config({
  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: 'wxd901da01d13166a9', // 必填，公众号的唯一标识
  timestamp: 457439223, // 必填，生成签名的时间戳
  nonceStr: 'slfuqo4szjsfd', // 必填，生成签名的随机串
  signature: 'sdfassdf',// 必填，签名
  jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
})
