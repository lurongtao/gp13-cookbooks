import React, { Component } from 'react'
import http from 'utils/http'

import HotCategoryUI from '../ui/HotCategoryUI'

export default class HotCategory extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    let result = await http.get('/api/hot')
    let data = result['hot-category'].map((value, index) => {
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
      <HotCategoryUI data={this.state.data}></HotCategoryUI>
    )
  }
}
