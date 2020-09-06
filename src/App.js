import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

import Classes from './Classes'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './Home'
import Instructor from './Instructor'
import Register from './Register'

export default () => <div className="App">
  <Router>
    <Header />
    <Switch>
      <Route path="/classes" component={Classes} />
      <Route path="/instructor" component={Instructor} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </Router>
</div>
