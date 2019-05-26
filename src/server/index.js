import express from 'express'
import path from 'path'
import fs from 'fs'
import render from './render'

const server = express()

server.use(express.static(path.resolve(__dirname, '../../build')))

server.get('/*', async (req, res) => {
  const mainFile = path.resolve(__dirname, '../../build/index.html')
  const { html, initialData } = await render(req)
  fs.readFile(mainFile, 'utf8', (err, data) => {
    if (err) {
      console.error('faaaak', err)
    }

    return res.send(htmlTemplate(data, { html, initialData }))
  })
})

server.listen(3000, () => {
  console.log('server listirigillo')
})

function htmlTemplate (template, { html, initialData = {} }) {
  const withInitialData = template.replace('{INITIAL_DATA}', JSON.stringify(initialData))
  return withInitialData.replace('<div id="app"></div>', `<div id="app">${html}</div>`)
}
