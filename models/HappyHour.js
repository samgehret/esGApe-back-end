const mongoose = require('../db/connection')

const HappyHourSchema = new mongoose.Schema({
  name: String,
  address: String,
  website: String,
  drinkPrice: String,
  ambiance: String,
  description: String,
  crowds: String,
  seating: String,
  distance: String
})

const HappyHour = mongoose.model('HappyHour', HappyHourSchema)

module.exports = HappyHour
