'use strict'
const chalk = require('chalk')

function error(err, req, res, next) {
  console.error(chalk.red(`[Error] ${new Date()}: ${err.message}`))
  console.error(chalk.red(err.stack))

  res.status(500).json({ status: 500, message: 'Internal Server Error' })
}

module.exports = error
