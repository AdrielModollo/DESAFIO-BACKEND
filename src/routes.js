const express = require('express')
const UserController = require('./controllers/UserController')
const CsvController = require('./controllers/CsvController')

const routes = express.Router();

routes.post('/users', UserController.create)
routes.get('/users', UserController.find)
routes.get('/users/:user_id', UserController.findOne)
routes.delete('/users/:user_id', UserController.deleteOne)
routes.get("/exportcsv", CsvController.csv)


module.exports = routes;