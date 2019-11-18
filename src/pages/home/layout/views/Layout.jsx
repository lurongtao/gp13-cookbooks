import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import connect from 'utils/connect'

import LayoutUI from './LayoutUI'

@connect({
  mapState: (state) => {
    return {
      checked: state.getIn(['layout', 'checked'])
    }
  }
})
@withRouter
class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'cookbook',
      hidden: false,
      fullScreen: true
    }
  }

  actions = {
    onCookBook: () => {
      this.setState({
        selectedTab: 'cookbook',
      })
    },
    onCategory: () => {
      this.setState({
        selectedTab: 'category',
      })
      this.props.history.push('/index/category')
    },
    onMap: () => {
      this.setState({
        selectedTab: 'map',
      })
    },
    onProfile: () => {
      this.setState({
        selectedTab: 'profile',
      })
    }
  }

  render() {
    return (
      <LayoutUI { ...this.actions } {...this.props} {...this.state}></LayoutUI>
    )
  }
}

export default Layout