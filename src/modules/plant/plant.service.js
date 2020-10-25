'use strict'
let plants = [
  {
    id: 10,
    name: 'Manzanilla',
    url: 'https://pymstatic.com/27652/conversions/manzanilla-thumb.jpg',
  },
  {
    id: 20,
    name: 'Buganvilla',
    url:
      'https://i.pinimg.com/originals/2e/79/6c/2e796c876b27bb0682fa953be3d0b579.jpg',
  },
  {
    id: 30,
    name: 'Bromelia',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Bromelias_sobre_un_tronco_seco.jpg',
  },
]

module.exports = function plantService(dbModel) {
  async function getAll() {
    return await dbModel.find({})
  }

  function get(id) {
    const plant = plants.filter((item) => item.id === parseInt(id))[0]
    if (!plant) {
      throw new Error(`Plant with id: ${plant}`)
    }
    return plant
  }

  async function store(data) {
    if (!data.name || !data.description) {
      throw new Error('Missing params in the request')
    }

    const savePlant = await dbModel.create(data)

    if (savePlant) {
      return savePlant
    }

    throw new Error('Internal Server Error')
  }

  function destroy(id) {
    plants = plants.filter((item) => item.id !== parseInt(id))
    return plants
  }

  return {
    getAll,
    get,
    store,
    destroy,
  }
}
