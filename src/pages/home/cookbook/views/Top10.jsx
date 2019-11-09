import React, { Component } from 'react'

import {
  Top10Wrap
} from './styledCookbook'

export default class Top10 extends Component {
  render() {
    return (
      <Top10Wrap>
        <header>精品好菜</header>
        <ul>
          <li>
            <dl>
              <dt>
                <img src="http://placehold.it/170x170" alt=""/>
              </dt>
              <dd>西芹泡椒爆鱿鱼</dd>
              <dd>23233浏览 899收藏</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <img src="http://placehold.it/170x170" alt=""/>
              </dt>
              <dd>西芹泡椒爆鱿鱼</dd>
              <dd>23233浏览 899收藏</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <img src="http://placehold.it/170x170" alt=""/>
              </dt>
              <dd>西芹泡椒爆鱿鱼</dd>
              <dd>23233浏览 899收藏</dd>
            </dl>
          </li>
        </ul>
      </Top10Wrap>
    )
  }
}
