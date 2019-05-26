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
  const { html, initialData, styles } = await render(req)

  fs.readFile(mainFile, 'utf8', (err, data) => {
    if (err) {
      console.error('faaaak', err)
    }

    return res.send(htmlTemplate(data, { html, initialData, styles }))
  })
})

server.listen(3000, () => {
  console.log('server listirigillo')
})

function htmlTemplate (template, { html, styles, initialData = {} }) {
  const withInitialData = template.replace('{INITIAL_DATA}', JSON.stringify(initialData))
  const withStyles = withInitialData.replace('{STYLES}', styles)
  return withStyles.replace('<div id="app"></div>', `<div id="app">${html}</div>`)
}
