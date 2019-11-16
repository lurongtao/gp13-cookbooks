import React, { Component } from 'react'
import { NavBar, Icon, ListView } from 'antd-mobile'

import { ListWrap, ListItem, H3Wrap } from './styledList'

import http from 'utils/http'

class List extends Component {
  constructor(props) {
    super(props)

    this.page = 0
    this.limit = 10
  }

  state = {
    list: [],
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    isLoading: true,
    hasMore: true
  }

  async genData() {
    let result = await http.get(`/list/data?_page=${this.page}&_limit=${this.limit}`)

    if (result.length === 0) {
      this.setState({
        hasMore: false
      })
      return
    }

    this.setState((state) => {
      let list = [
        ...state.list,
        ...result
      ]

      return {
        list,
        dataSource: this.state.dataSource.cloneWithRows(list),
        isLoading: false
      }
    })
  }

  async componentDidMount() {
    this.genData()
  }

  row(value, index) {
    return (
      <ListItem key={value.id + index}>
        <div>
          <img style={{width: '1.15rem', height: '.75rem'}} src={value.img} alt=""/>
        </div>
        <div>
          <h2>{value.name}</h2>
          <H3Wrap>{value.burdens}</H3Wrap>
          <h4>{value.all_click}浏览 {value.favorites}收藏</h4>
        </div>
      </ListItem>
    )
  }

  onEndReached = async (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return
    }
    
    this.page++

    this.setState({ isLoading: true })

    this.genData()
  }

  render() {
    return (
      <ListWrap>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >{this.props.location.state.text}</NavBar>
        <ul className="list">
          <ListView
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              {!this.state.hasMore ? '到底了' : this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={this.row}
            pageSize={4}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
          />
        </ul>
      </ListWrap>
    )
  }
}

export default List