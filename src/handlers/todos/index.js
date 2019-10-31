const createdResponse = require('./created-response')

module.exports = (router) => {
  router.get('/api/todos', (ctx, next) => {
    ctx.body = [
      {
        title: 'one',
        message: 'one'
      }
    ]
  })

  router.post('/api/todos', (ctx, next) => {
    createdResponse(ctx, 'todo-id')
  })
}
