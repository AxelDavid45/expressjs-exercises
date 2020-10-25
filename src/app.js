'use strict'
const express = require('express')
const chalk = require('chalk')
const database = require('./database/connection')
const cors = require('cors')
const notFoundMiddleware = require('./middleware/404')
const errorMiddleware = require('./middleware/error')
const plantsController = require('./modules/plant/plant.controller')
const app = express()

// Connection to DB
database().then((db) =>
  console.log(chalk.green(`App connected to db: ${db.connections[0].name}`))
)

// Activate CORS
app.use(cors())

app.use(express.json())

app.use('/plants', plantsController)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

module.exports = app
