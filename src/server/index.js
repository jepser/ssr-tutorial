import express from 'express'
import path from 'path'
import fs from 'fs'
import ignoreFavicon from './ignore-favicon'
import render from './render'

import webpack from 'webpack'
import webpackConfig from '../../config/webpack.dev'

const server = express()

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig)
  server.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath, hot: true
  }))

  server.use(require('webpack-hot-middleware')(compiler))
}
server.use(ignoreFavicon)
server.use(express.static(path.resolve(__dirname, '../../build')))

server.get('/*', async (req, res) => {
  const mainFile = path.resolve(__dirname, '../../build/main.html')
  const { html, initialData, styles, head } = await render(req)

  fs.readFile(mainFile, 'utf8', (err, data) => {
    if (err) {
      console.error('faaaak', err)
    }

    return res.send(htmlTemplate(data, { html, initialData, styles, head }))
  })
})

server.listen(3000, () => {
  console.log('server listirigillo')
})

function htmlTemplate (template, { html, styles, head, initialData = {} }) {
  const mutations = {
    '{INITIAL_DATA}': JSON.stringify(initialData),
    '{STYLES}': styles,
    '{APP}': html,
    '{TITLE}': head.title.toString(),
    '{META}': head.meta.toString()
  }

  return Object.entries(mutations).reduce((app, [placeholder, data]) => app.replace(placeholder, data), template)
}
