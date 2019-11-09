import React, { Component } from 'react'

import Header from './Header'
import Swiper from './Swiper'
import Search from 'components/search/Search'
import HotCategory from './HotCategory'

export default class CookBook extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Swiper></Swiper>
        <Search hasBorder={true} borderColor="#ee742f" width={'1px'}></Search>
        <HotCategory></HotCategory>
      </div>
    )
  }
}
