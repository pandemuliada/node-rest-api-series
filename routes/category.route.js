const Route = require('express')['Router']()

const { index, store, update, destroy } = require('../controllers/category.controller')

Route.get('/', index)
Route.post('/', store)
Route.put('/:id', update)
Route.delete('/:id', destroy)

module.exports = Route
