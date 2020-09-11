import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/*" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}
