import React, { Component } from 'react'

import Header from './Header'
import Swiper from './Swiper'
import Search from 'components/search/Search'
import HotCategory from './HotCategory'
import Top10 from './Top10'

import { CookbookWrap } from './styledCookbook'

export default class CookBook extends Component {
  render() {
    return (
      <CookbookWrap>
        <Header></Header>
        <div>
          <Swiper></Swiper>
          <Search hasBorder={true} radius={10} borderColor="#ee742f" width={'1px'}></Search>
          <HotCategory></HotCategory>
          <Top10></Top10>
        </div>
      </CookbookWrap>
    )
  }
}
