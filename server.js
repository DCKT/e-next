const PORT = process.env.ENEXT_PORT || 4444
const dev = process.env.NODE_ENV !== 'production'
const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.get('/product/:slug', (req, res) => {
    return app.render(req, res, '/product', req.params)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
