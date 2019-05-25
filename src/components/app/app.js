import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </Router>
  )
}

export default hot(App)
