const mongoose = require('mongoose')
const { database } = require('../config')
const URI = `mongodb+srv://${database.username}:${database.password}@${database.host}/${database.name}?retryWrites=true&w=majority`

let db = null

async function connection() {
  try {
    if (!db) {
      db = await mongoose.connect(URI, { useNewUrlParser: true })
    }
    return db
  } catch (err) {
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
  }
}

module.exports = connection
