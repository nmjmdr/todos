const status = require('./status')
const todos = require('./todos')
module.exports = {
  registerRoutes: (router) => {
    status(router)
    todos(router)
  }
}
