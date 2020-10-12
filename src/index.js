'use strict'
const express = require('express')
const { port } = require('./config')
const notFoundMiddleware = require('./middleware/404')
const errorMiddleware = require('./middleware/error')
const plantsController = require('./modules/plant/plant.controller')
const app = express()

app.use(express.json())

app.use('/plants', plantsController)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
