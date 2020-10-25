'use strict'
const { port } = require('./config')
const app = require('./app')

console.log('testing')

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
