import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import store from './store/'

import { Layout } from './pages/home/layout/'
import { List } from './pages/list/'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/index" component={Layout}></Route>
            <Route path="/list" component={List}></Route>
            <Redirect from="/" to="/index"></Redirect>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
