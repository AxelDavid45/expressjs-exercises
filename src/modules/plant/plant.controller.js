'use strict'
const express = require('express')
const router = express.Router()
const plants = [
  {
    id: 10,
    name: 'Manzanilla',
    url: 'https://pymstatic.com/27652/conversions/manzanilla-thumb.jpg'
  },
  {
    id: 20,
    name: 'Buganvilla',
    url: 'https://i.pinimg.com/originals/2e/79/6c/2e796c876b27bb0682fa953be3d0b579.jpg'
  },
  {
    id: 30,
    name: 'Bromelia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Bromelias_sobre_un_tronco_seco.jpg'
  },
]

router.get('/', (req, res) => {
  res.json(plants)
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  const plant = plants.filter(item => item.id === parseInt(id))
  res.json(plant)
})

router.post('/', (req, res) => {
  console.log(`Plant to be saved:`)
  console.log(req.body)

  plants.push(req.body)

  console.log(`Plants updated`)
  console.log(plants)
  res.status(201).json(plants)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  console.log(`Plant to be deleted: ${id}`)
  console.log(plants)
  const newPlants = plants.filter(item => item.id !== parseInt(id))
  console.log(newPlants)
  res.json({message: `Plant ${id} deleted`})
})


module.exports = router
