import React, { Component } from 'react'

import border from '../styled/border'

import { SearchWrap, SearchInnerWrap } from './styledSearch'

import searchImg from 'assets/images/search.png'

export default class Search extends Component {
  static defaultProps = {
    hasBorder: false,
    backgroundColor: '#fff'
  }

  render() {
    let InnerWrap = this.props.hasBorder ? border({comp: SearchInnerWrap, ...this.props}) : SearchInnerWrap
    return (
      <SearchWrap>
        <InnerWrap { ...this.props }>
          <img src={searchImg} alt=""/>
          <span>想吃什么搜这里，如川菜</span>
        </InnerWrap>
      </SearchWrap>
    )
  }
}