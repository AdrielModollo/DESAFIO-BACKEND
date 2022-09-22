const express = require('express')
const routes = require('./routes')
const { globalErrorsMiddleware } = require('./main/middlewares/global-middlwares')

require('./database')

const app = express();

app
    .use(express.json())
    .use(routes)
    .use(globalErrorsMiddleware);

app.listen(3333);