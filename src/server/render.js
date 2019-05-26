import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ServerStyleSheet } from 'styled-components'

import createStore from '../store'
import { actions } from '../modules/news'
import App from '../components/app'

const render = async (req) => {
  const sheet = new ServerStyleSheet()
  const context = {}
  const store = createStore()
  await store.dispatch(actions.loadNews())

  try {
    const html = renderToString(
      sheet.collectStyles(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      )
    )

    return {
      html,
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
