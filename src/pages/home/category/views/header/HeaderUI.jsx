import React from 'react'

import {
  HeaderWrap,
  SlideWrap
} from './styledHeader'

export default function HeaderUI(props) {
  return (
    <HeaderWrap>
      <SlideWrap>
        <li 
          className={props.type==='category' ? 'active' : ''}
          onClick={() => props.onSwitch('category')}
        >分类</li>
        <li
          className={props.type==='material' ? 'active' : ''}
          onClick={() => props.onSwitch('material')}
        >食材</li>
        <li
          className={props.type==='category' ? '' : 'right'}
        ></li>
      </SlideWrap>
    </HeaderWrap>
  )
}
