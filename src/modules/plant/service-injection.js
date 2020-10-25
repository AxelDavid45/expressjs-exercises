const { plantModel } = require('./schema/plant.schema')
const plantService = require('./plant.service')

module.exports = plantService(plantModel)
