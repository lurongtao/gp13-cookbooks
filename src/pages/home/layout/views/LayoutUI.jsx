import React from 'react'

import { TabBar } from 'antd-mobile'

import { CookBook } from '../../cookbook/'
import { Category } from '../../category/'
import Map from '../../map/Map'
import Profile from '../../profile/Profile'

import cookbook from 'assets/images/cookbook.png'
import cookbookActive from 'assets/images/cookbook-active.png'
import location from 'assets/images/location.png'
import locationActive from 'assets/images/location-active.png'
import menu from 'assets/images/menu.png'
import menuActive from 'assets/images/menu-active.png'
import more from 'assets/images/more.png'
import moreActive from 'assets/images/more-active.png'

export default function LayoutUI(props) {

  const tabbars = [
    <TabBar.Item
      title="菜谱大全"
      key="cookbook"
      icon={<div style={{
        width: '22px',
        height: '22px',
        background: `url(${cookbook}) center center /  32px 32px no-repeat` }}
      />
      }
      selectedIcon={<div style={{
        width: '22px',
        height: '22px',
        background: `url(${cookbookActive}) center center / 32px 32px no-repeat` }}
      />
      }
      selected={props.selectedTab === 'cookbook'}
      onPress={props.onCookBook}
    >
      <CookBook></CookBook>
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menu}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
        />
      }
      title="分类"
      key="category"
      selected={props.selectedTab === 'category'}
      onPress={props.onCategory}
    >
      <Category></Category>
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${location}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
        />
      }
      title="美食地图"
      key="map"
      selected={props.selectedTab === 'map'}
      onPress={props.onMap}
    >
      <Map></Map>
    </TabBar.Item>,
    <TabBar.Item
      icon={{ uri: more }}
      selectedIcon={{ uri: moreActive }}
      title="更多"
      key="profile"
      selected={props.selectedTab === 'profile'}
      onPress={props.onProfile}
    >
      <Profile></Profile>
    </TabBar.Item>
  ]

  !props.checked && tabbars.splice(2, 1)

  return (
    <div style={props.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#000"
        barTintColor="white"
        hidden={props.hidden}
        prerenderingSiblingsNumber={Infinity}
      >
        {tabbars}
      </TabBar>
    </div>
  )
}
