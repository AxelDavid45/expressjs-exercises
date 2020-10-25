'use strict'
require('dotenv').config()

const config = {
  port: process.env.PORT,
  database: {
    username: process.env.MONGODB_USR,
    password: process.env.MONGODB_PASSWORD,
    name: process.env.MONGODB_NAME,
    host: process.env.MONGO_HOST,
  },
}

module.exports = config
