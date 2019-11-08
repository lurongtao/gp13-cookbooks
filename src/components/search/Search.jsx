import React, { Component } from 'react'

import { SearchWrap } from './styledSearch'

import searchImg from 'assets/images/search.png'

export default class Search extends Component {
  static defaultProps = {
    hasBorder: false,
    backgroundColor: '#fff'
  }

  render() {
    return (
      <SearchWrap {...this.props}>
        <div>
          <img src={searchImg} alt=""/>
          <span>想吃什么搜这里，如川菜</span>
        </div>
      </SearchWrap>
    )
  }
}