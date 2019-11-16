import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'

import { ListWrap, ListItem } from './styledList'

export default class List extends Component {
  render() {
    return (
      <ListWrap>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >{this.props.location.state.text}</NavBar>
        <ul class="list">
          <ListItem>
            <div>
              <img src="http://placehold.it/115x75" alt=""/>
            </div>
            <div>
              <h2>红烧鱼</h2>
              <h3>青辣椒、非洲鲫鱼</h3>
              <h4>45445浏览 44545收藏</h4>
            </div>
          </ListItem>
        </ul>
      </ListWrap>
    )
  }
}
