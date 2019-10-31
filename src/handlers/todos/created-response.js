const responses = require('../common/responses')

module.exports = (ctx, objectId, message) => {
  ctx.status = 201
  ctx.body = {
    ...responses.success(message)
  }
}
