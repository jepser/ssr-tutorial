import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from '../components/app'

export default (req) => {
  const context = {}
  return renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )
}
