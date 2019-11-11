import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Top10Wrap
} from './styledCookbook'

const mapState = (state) => {
  return {
    list: state.cookbook.list
  }
}

class Top10 extends Component {
  async componentDidMount() {
    
  }

  render() {
    return (
      <Top10Wrap>
        <header>精品好菜</header>
        <ul>
          {
            this.props.list.slice(0, 10).map((value, index) => {
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

export default connect(mapState)(Top10)