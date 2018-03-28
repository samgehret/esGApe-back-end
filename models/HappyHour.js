const mongoose = require('../db/connection')

const HappyHourSchema = new mongoose.Schema({
  name: String,
  address: String,
  website: String,
  description: String,
  distance: String,
  drinkPrice: String,
  ambiance: String,
  crowds: String,
  seating: String,
  author: String
})

const HappyHour = mongoose.model('HappyHour', HappyHourSchema)

module.exports = HappyHour
