import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'

import routes from '../../routes'

const App = () => {
  return (
    <Switch>
      {routes.map(({ path, component, exact }) => <Route key={path} exact={exact} path={path} component={component} />)}
    </Switch>
  )
}

export default hot(App)
