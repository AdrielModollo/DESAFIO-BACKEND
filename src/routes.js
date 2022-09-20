const express = require('express')
const UserController = require('./controllers/UserController')

const routes = express.Router();

routes.post('/users', UserController.store)
routes.get('/users', UserController.find)
routes.get('/users/:id', UserController.findOne)


module.exports = routes;