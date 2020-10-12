'use strict'

function notFound (req, res, next) {
  res.status(404).json({ message: 'Content not found'})
}

module.exports = notFound
