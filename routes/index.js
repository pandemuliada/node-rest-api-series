const Router = require('express')['Router']()
const CategoryRoutes = require('./category.route')

module.exports = () => {
  Router.use('/categories', CategoryRoutes)

  return Router
}
