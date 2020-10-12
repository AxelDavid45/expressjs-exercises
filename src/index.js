'use strict'
const express = require('express')
const { port } = require('./config')
const notFoundMiddleware = require('./middleware/404')
const plantsController = require('./modules/plant/plant.controller')
const app = express()

app.use(express.json())

app.use('/plants', plantsController)

app.use(notFoundMiddleware)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
