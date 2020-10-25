const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: {
    type: String,
    required: false,
    default:
      'https://www.plantsguru.com/image/cache/catalog/Calanchoe/pg-medicinal-plants-costus-igneus-500x457-800x800.jpg',
  },
  createdAt: { type: Date, required: false, default: new Date() },
  timestamp: { type: Date, required: false, default: Date.now() },
})

module.exports = {
  plantModel: mongoose.model('plants', plantSchema),
}
