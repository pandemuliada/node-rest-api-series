const Category = require('../models')['Category']

function index(req, res) {
  Category.findAll()
    .then((data) => {
      res.json({
        data,
      })
    })
    .catch((err) => {
      res.json({
        message: 'Something when wrong!',
      })
    })
}

function store(req, res) {
  Category.create({ ...req.body })
    .then((data) => {
      res.json({
        data,
      })
    })
    .catch((err) => {
      res.json({
        message: 'Something when wrong!',
      })
    })
}

function update(req, res) {
  Category.update({ ...req.body }, { where: { id: req.params.id } })
    .then((data) => {
      Category.findByPk(req.params.id).then((data) => {
        res.json({
          data,
        })
      })
    })
    .catch((err) => {
      res.json({
        message: 'Something when wrong!',
      })
    })
}

function destroy(req, res) {
  let deletedCategory = null

  Category.findByPk(req.params.id).then((data) => {
    deletedCategory = data
  })

  Category.destroy({ where: { id: req.params.id } })
    .then((deleted) => {
      res.json({
        data: deletedCategory,
      })
    })
    .catch((err) => {
      res.json({
        message: 'Something when wrong!',
      })
    })
}

module.exports = {
  index,
  store,
  update,
  destroy,
}
