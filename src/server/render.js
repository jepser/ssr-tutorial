import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from '../store'
import { actions } from '../modules/news'
import App from '../components/app'

const render = async (req) => {
  const context = {}
  const store = createStore()
  await store.dispatch(actions.loadNews())

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )

  return {
    html,
    initialData: store.getState()
  }
}

export default render
