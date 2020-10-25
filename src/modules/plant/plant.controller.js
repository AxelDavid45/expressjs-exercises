'use strict'
const express = require('express')
const router = express.Router()
const plantService = require('./service-injection')

router.get('/', async (req, res, next) => {
  try {
    const response = await plantService.getAll()
    res.json(response)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const response = plantService.get(id)
  res.json(response)
})

router.post('/', async (req, res, next) => {
  try {
    const savePlant = await plantService.store(req.body)
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
