import React from 'react'

import {
  Top10Wrap
} from './styledCookbook'

export default (props) => {
  return (
    <Top10Wrap>
      <header>精品好菜</header>
      <ul>
        {
          props.list.slice(0, 10).map((value, index) => {
            return (
              <li key={value.id}>
                <dl>
                  <dt>
                    <img src={value.img} alt=""/>
                  </dt>
                  <dd>{value.name}</dd>
                  <dd>{value.all_click}浏览 {value.favorites}收藏</dd>
                </dl>
              </li>
            )
          })
        }
      </ul>
    </Top10Wrap>
  )
}