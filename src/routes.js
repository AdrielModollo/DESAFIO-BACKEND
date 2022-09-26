const express = require('express')
const UserController = require('./controllers/UserController')
const CsvController = require('./controllers/CsvController')
const AccountController = require('./controllers/AccountController')
const AuthController = require('./controllers/AuthController')
const createUser = require('./presentation/controllers/schemas/create-schema')
const userUpdate = require('./presentation/controllers/schemas/update-schema')
const accountCreate = require('./presentation/controllers/schemas/create-account-schema')
const authSchema = require('./presentation/controllers/schemas/auth-schema')
const { validate } = require('./presentation/controllers/validators/validator')
const { verifyJWT } = require('./controllers/services/verifyJWT-service')

const routes = express.Router();

routes.post('/users', validate(createUser), UserController.create)
routes.get('/users', verifyJWT, UserController.find)
routes.get('/users/:user_id', verifyJWT, UserController.findOne)
routes.delete('/users/:user_id', verifyJWT, UserController.deleteOne)
routes.patch('/users/:user_id', verifyJWT, validate(userUpdate), UserController.update)


routes.get("/exportcsv", verifyJWT, CsvController.csvAll)
routes.get("/csvfilter", verifyJWT, CsvController.csvFilter)

routes.post('/users/:user_id/accounts', verifyJWT, validate(accountCreate), AccountController.create)
routes.delete('/account/:account_id', verifyJWT, AccountController.deleteOne)

routes.post('/login', validate(authSchema), AuthController.authLogin)

module.exports = routes;