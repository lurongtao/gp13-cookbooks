import React from 'react'
import { Route } from 'react-router-dom'

import Header from '../header/HeaderContainer'
import Search from 'components/search/Search'
import Menu from 'components/menu/MenuContainer'

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
      <Route
        path="/index/category"
        render={() => {
          return <Menu type="category" />
        }}
      ></Route>
      <Route
        path="/index/material"
        render={() => {
          return <Menu type="material" />
        }}
      >
      </Route>
    </CategoryWrap>
  )
}
