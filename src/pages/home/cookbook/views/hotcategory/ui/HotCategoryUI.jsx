import React from 'react'

import { Grid } from 'antd-mobile'

import {
  GridWrap, TitleWrap
} from './styledCookbook'

export default (props) => {
  return (
    <GridWrap>
      <TitleWrap width="0 0 1px 0">
        热门分类
      </TitleWrap>
      <Grid 
        data={props.data}
        columnNum={3}
        hasLine={false}
        renderItem={dataItem => (
          <div className="grid-item">
            <img src={dataItem.icon} alt="" />
            <div>
              <span>{dataItem.text}</span>
            </div>
          </div>
        )}
        onClick={(el) => {
          props.onClick(el.text)
        }}
      />
    </GridWrap>
  )
}