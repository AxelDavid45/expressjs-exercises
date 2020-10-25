'use strict'
const express = require('express')
const router = express.Router()
const plantService = require('./plant.service')()

router.get('/', (req, res) => {
  const response = plantService.getAll()
  res.json(response)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const response = plantService.get(id)
  res.json(response)
})

router.post('/', (req, res, next) => {
  try {
    const savePlant = plantService.store(req.body)
    res.statusCode = 201
    res.json(savePlant)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const destroyPlant = plantService.destroy(id)
  res.json(destroyPlant)
})


module.exports = router
