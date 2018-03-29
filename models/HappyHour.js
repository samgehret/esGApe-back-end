const mongoose = require('../db/connection')

const CommentsSchema = new mongoose.Schema({
  commentText: String
})

const HappyHourSchema = new mongoose.Schema({
  name: String,
  address: String,
  website: String,
  description: String,
  distance: String,
  foodType: String,
  author: String,
  comments: [CommentsSchema],
  createdAt: { type: Date, default: Date.now }
})

const HappyHour = mongoose.model('HappyHour', HappyHourSchema)

module.exports = HappyHour
