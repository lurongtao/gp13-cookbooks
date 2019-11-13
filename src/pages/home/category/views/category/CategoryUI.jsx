import React from 'react'

import Header from '../header/HeaderContainer'
import Search from 'components/search/Search'
import Menu from '../menu/MenuContainer'

import { CategoryWrap } from './styledCategory'

export default function CategoryUI() {
  return (
    <CategoryWrap>
      <Header></Header>
      <Search
        hasBorder={true} 
        radius={6} 
        borderColor="#fff" 
        width={0}
        background={'#eee'}
      ></Search>
      <Menu></Menu>
    </CategoryWrap>
  )
}
