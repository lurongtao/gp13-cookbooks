import React, { Component } from 'react'

import MenuUI from './MenuUI'

import http from 'utils/http'

export default class MenuContainer extends Component {
  state = {
    menu: null,
    tab: '',
    type: 'category'
  }

  handleClickTab = (tab) => {
    this.setState({
      tab
    })
  }

  async componentDidMount() {
    let result = await http.get('/api/cate')
    let data = result.data
    this.setState({
      menu: data,
      tab: '热门'
    })

    setTimeout(() => {
      this.setState({
        type: 'material',
        tab: '肉类'
      })
    }, 2000)
  }

  render() {
    return (
      <MenuUI
        menu={this.state.menu}
        tab={this.state.tab}
        onClickTab={this.handleClickTab}
        type={this.state.type}
      ></MenuUI>
    )
  }
}
