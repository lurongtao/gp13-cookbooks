import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store/'

import { Layout } from './pages/home/layout/'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    )
  }
}
