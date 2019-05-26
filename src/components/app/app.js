import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import Home from '../home'
import About from '../about'
import News from '../news'
import reducers from '../../modules'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const enhancer = composeEnhancers()

const store = createStore(reducers, undefined, enhancer)

const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/news' component={News} />
      </Switch>
    </Provider>
  )
}

export default hot(App)
