import express from 'express'
import render from './render'

const server = express()

server.get('*', (req, res) => {
  return res.send(200, render)
})

server.listen(3000, () => {
  console.log('server listirigillo')
})
