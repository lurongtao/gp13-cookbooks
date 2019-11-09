import React, { Component } from 'react'
import http from 'utils/http'

import {
  Top10Wrap
} from './styledCookbook'

export default class Top10 extends Component {
  state = {
    list: []
  }

  async componentDidMount() {
    let result = await http.get('/api/list')
    this.setState({
      list: result.data
    })
  }

  render() {
    return (
      <Top10Wrap>
        <header>精品好菜</header>
        <ul>
          {
            this.state.list.slice(0, 10).map((value, index) => {
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
}
