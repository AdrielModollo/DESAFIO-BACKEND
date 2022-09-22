const express = require('express')
const UserController = require('./controllers/UserController')
const CsvController = require('./controllers/CsvController')
const AccountController = require('./controllers/AccountController')

const routes = express.Router();

routes.post('/users', UserController.create)
routes.get('/users', UserController.find)
routes.get('/users/:user_id', UserController.findOne)
routes.delete('/users/:user_id', UserController.deleteOne)
routes.patch('/users/:user_id', UserController.update)


routes.get("/exportcsv", CsvController.csv)

routes.post('/users/:user_id/accounts', AccountController.create)
routes.delete('/account/:account_id', AccountController.deleteOne)


module.exports = routes;