import React from 'react'

import Header from '../header/HeaderContainer'
import Search from 'components/search/Search'
import { CategoryWrap } from './styledCategory'

import Menu from 'components/menu/MenuContainer'
import { Route } from 'react-router-dom'

export default function CategoryUI(props) {
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
      <div className="cate-list">
        <Route
          path="/index/category"
          children={() => {
            return <Menu type="category" />
          }}
        />
        <Route
          path="/index/material"
          children={() => {
            return <Menu type="material" />
          }}
        />
      </div>
    </CategoryWrap>
  )
}
