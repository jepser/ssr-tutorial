import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ServerStyleSheet } from 'styled-components'
import Helmet from 'react-helmet'

import createStore from '../store'
import App from '../components/app'
import routes from '../routes'

const render = async (req) => {
  const url = req.url
  const { component } = routes.find(route => matchPath(url, route)) || {}

  const sheet = new ServerStyleSheet()
  const context = {}

  const store = createStore()

  if (component && component.initialData) {
    await store.dispatch(component.initialData())
  }

  try {
    const html = renderToString(
      sheet.collectStyles(
        <Provider store={store}>
          <StaticRouter location={url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      )
    )
    const head = Helmet.renderStatic()

    return {
      html,
      head,
      styles: sheet.getStyleTags(),
      initialData: store.getState()
    }
  } catch (error) {
    console.error(error)
  } finally {
    sheet.seal()
  }
}

export default render
