import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'

import swiperImg1 from 'assets/images/swiper-1.png'
import swiperImg2 from 'assets/images/swiper-2.jpeg'
import swiperImg3 from 'assets/images/swiper-3.jpeg'

import {
  SwiperWrap
} from './styledCookbook'

export default class Swiper extends Component {
  render() {
    return (
      <SwiperWrap>
        <Carousel
          autoplay={true}
          infinite
        >
          <img src={swiperImg1} alt=""/>
          <img src={swiperImg2} alt=""/>
          <img src={swiperImg3} alt=""/>
        </Carousel>
      </SwiperWrap>
    )
  }
}
