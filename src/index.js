'use strict'
const express = require('express')
const { port } = require('./config')
const app = express()
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

app.use(express.json())

app.get('/plants', (req, res) => {
  res.json(plants)
})

app.get('/plants/:id', (req, res) => {
  const { id } = req.params

  const plant = plants.filter(item => item.id === parseInt(id))[0]
  res.json(plant)
})

app.post('/plants', (req, res) => {
  console.log(`Plant to be saved:`)
  console.log(req.body)

  plants.push(req.body)

  console.log(`Plants updated`)
  console.log(plants)
  res.json(plants)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
