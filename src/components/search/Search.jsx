import React, { Component } from 'react'

import { SearchWrap, SearchInnerWrap, BorderedSearchInnerWrap } from './styledSearch'

import searchImg from 'assets/images/search.png'

export default class Search extends Component {
  static defaultProps = {
    hasBorder: false,
    backgroundColor: '#fff'
  }

  render() {
    let Wrap = this.props.hasBorder ? BorderedSearchInnerWrap : SearchInnerWrap
    return (
      <SearchWrap>
        <Wrap {...this.props}>
          <img src={searchImg} alt=""/>
          <span>想吃什么搜这里，如川菜</span>
        </Wrap>
      </SearchWrap>
    )
  }
}