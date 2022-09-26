const express = require('express')
const routes = require('./routes')
const { globalErrorsMiddleware } = require('./main/middlewares/global-middlwares')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');

require('./database')

const app = express();

app
    .use(express.json())
    .use(routes)
    .use(globalErrorsMiddleware)
    .use(cookieParser())
    .use(bodyParser.json())

app.listen(3333);