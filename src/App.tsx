import React from 'react'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation
} from 'react-router-dom'

export const App = () => {
  let pathname = useLocation().pathname
  let userId = localStorage.getItem('userId')

  return (
    <div className="App">
      <Header />
      <Router>
        {pathname !== '/' && !userId && <Redirect to="/" />}
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/*" component={userId ? Profile : Home} />
        </Switch>
      </Router>
    </div>
  )
}
