const mongoose = require('../db/connection')

const LunchSpotSchema = new mongoose.Schema({
  name: String,
  address: String,
  website: String,
  description: String,
  distance: String,
  foodType: String,
  lunchPrice: Number,
  recommendedItems: String,
  ambiance: String,
  crowds: String,
  seating: String
})

const LunchSpot = mongoose.model('LunchSpot', LunchSpotSchema)

module.exports = LunchSpot
