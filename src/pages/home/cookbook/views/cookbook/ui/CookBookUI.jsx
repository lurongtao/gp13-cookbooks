import React from 'react'

import Header from './Header'
import Swiper from '../../swiper/container/Swiper'
import Search from 'components/search/Search'
import HotCategory from '../../hotcategory/container/HotCategory'
import Top10 from '../../top10/container/Top10'

import { CookbookWrap } from './styledCookbook'

export default (props) => {
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