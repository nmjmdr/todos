const Koa = require('koa')
const Router = require('koa-router')
const NoCache = require('koa-no-cache')
const config = require('../config.json')
const port = config.port
const bunyan = require('bunyan')
const logger = require('koa-logger')
const handlers = require('./handlers')

const log = bunyan.createLogger({ name: 'todos' })

const errorHandler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
}

const app = new Koa()
const router = new Router()

handlers.registerRoutes(router)

app.use(errorHandler)
app.use(logger())
app.use(router.routes())
app.use(router.allowedMethods())
app.use(NoCache())

log.info(`API listening on: ${port}`)

const server = app.listen(port)

module.exports = server
