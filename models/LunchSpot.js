const mongoose = require('../db/connection')

const LunchSpotSchema = new mongoose.Schema({
  name: String,
  address: String,
  website: String,
  lunchPrice: Number,
  recommendedItems: String,
  foodType: String,
  ambiance: String,
  description: String,
  crowds: String,
  seating: String,
  distance: String
})

const LunchSpot = mongoose.model('LunchSpot', LunchSpotSchema)

module.exports = LunchSpot
