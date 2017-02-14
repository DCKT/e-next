const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()

const matchProductDetails = route('/product/:slug')

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const { pathname } = parse(req.url)
      const params = matchProductDetails(pathname)

      if (params === false) {
        handle(req, res)
        return
      }

      app.render(req, res, '/product', params)
    })
    .listen(4444, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:4444')
    })
  })
