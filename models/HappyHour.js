const mongoose = require('../db/connection')

const HappyHourSchema = new mongoose.Schema({
  name: String,
  address: String
})

const HappyHour = mongoose.model('HappyHour', HappyHourSchema)

module.exports = HappyHour
