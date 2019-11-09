import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import http from 'utils/http'

import {
  GridWrap, TitleWrap
} from './styledCookbook'

export default class HotCategory extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    let result = await http.get('/api/hot-category')
    let data = result.map((value, index) => {
      return {
        icon: value.img,
        text: value.title
      }
    })
    data.push({
      icon: '',
      text: '更多...'
    })
    this.setState({
      data
    })
  }

  render() {
    return (
      <GridWrap>
        <TitleWrap width="0 0 1px 0">
          热门分类
        </TitleWrap>
        <Grid 
          data={this.state.data}
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
        />
      </GridWrap>
    )
  }
}
