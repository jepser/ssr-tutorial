import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'

import Home from '../home'
import About from '../about'
import News from '../news'

const App = () => {
  return (

    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/news' component={News} />
    </Switch>
  )
}

export default hot(App)
