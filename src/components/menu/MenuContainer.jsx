import React, { Component } from 'react'
import cateTransition from 'components/hoc/cateTransition'
import { withRouter } from 'react-router-dom'

import MenuUI from './MenuUI'

import http from 'utils/http'

@withRouter
@cateTransition
class MenuContainer extends Component {
  state = {
    menu: null,
    // 不要试图用两个组件同时更新一个数据
    tab: '',
    initTab: this.props.type === 'category' ? '热门' : '肉类'
  }

  handleClickTab = (tab) => {
    this.setState({
      tab
    })
  }

  handleContentClick = (value) => {
    this.props.history.push('/list', {text: value})
  }

  async componentDidMount() {
    let result = await http.get('/api/cate')
    let data = result.data
    this.setState({
      menu: data
    })
  }

  render() {
    let tab = this.state.tab || this.state.initTab
    let data = this.state.menu ? this.state.menu[this.props.type] : {}
    let tabs = Object.keys(data)
    let contents = data[tab] || []
    return (
      <MenuUI
        tab={tab}
        tabs={tabs}
        contents={contents}
        onClickTab={this.handleClickTab}
        onContentClick={this.handleContentClick}
      ></MenuUI>
    )
  }
}

export default MenuContainer