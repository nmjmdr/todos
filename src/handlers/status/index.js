module.exports = (router) => {
  router.get('/api/status', (ctx, next) => {
    ctx.body = {
      ok: true
    }
  })
}
