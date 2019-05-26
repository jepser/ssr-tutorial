import express from 'express'
import path from 'path'
import fs from 'fs'
import render from './render'

const server = express()

server.use(express.static(path.resolve(__dirname, '../../build')))

server.get('*', (req, res) => {
  const mainFile = path.resolve(__dirname, '../../build/index.html')
  const app = render(req)
  fs.readFile(mainFile, 'utf8', (err, data) => {
    if (err) {
      console.error('faaaak', err)
    }

    return res.send(data.replace('<div id="app"></div>', `<div id="app">${app}</div>`))
  })
})

server.listen(3000, () => {
  console.log('server listirigillo')
})
