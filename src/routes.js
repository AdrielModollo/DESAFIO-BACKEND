const express = require('express')
const UserController = require('./controllers/UserController')

const routes = express.Router();

routes.post('/users', UserController.store)
routes.get('/users', UserController.find)
routes.get('/users/:user_id', UserController.findOne)
routes.delete('/users/:user_id', UserController.deleteOne)


module.exports = routes;