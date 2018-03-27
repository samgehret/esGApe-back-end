const mongoose = require('../db/connection')

const LunchSpotSchema = new mongoose.Schema({
  name: String,
  address: String
})

const LunchSpot = mongoose.model('LunchSpot', LunchSpotSchema)

module.exports = LunchSpot
