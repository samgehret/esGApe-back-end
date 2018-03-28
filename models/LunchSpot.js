const mongoose = require('../db/connection')

const LunchSpotSchema = new mongoose.Schema({
  name: String,
  address: String,
  website: String,
  description: String,
  distance: String,
  foodType: String,
  author: String,
  createdAt: { type: Date, default: Date.now }
})

const LunchSpot = mongoose.model('LunchSpot', LunchSpotSchema)

module.exports = LunchSpot
