import React, { Component } from 'react'
import http from 'utils/http'
import { withRouter } from 'react-router-dom'

import HotCategoryUI from '../ui/HotCategoryUI'

@withRouter
class HotCategory extends Component {
  state = {
    data: []
  }

  handleClick = (text) => {
    this.props.history.push('/list', { text })
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
      <HotCategoryUI onClick={this.handleClick} data={this.state.data}></HotCategoryUI>
    )
  }
}

export default HotCategory