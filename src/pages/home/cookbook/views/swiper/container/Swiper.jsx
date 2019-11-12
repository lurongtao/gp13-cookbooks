import React, { Component } from 'react'

import SwiperUI from '../ui/SwiperUI'

import connect from 'utils/connect.js'
import mapStore from './mapStore'

@connect(mapStore) 
class Swiper extends Component {
  async componentDidMount() {
    this.props.loadData()
  }

  render() {
    return (
      <SwiperUI {...this.props}></SwiperUI>
    )
  }
}

export default Swiper
