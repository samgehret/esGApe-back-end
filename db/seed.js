const LunchSpot = require('../models/LunchSpot')
const HappyHour = require('../models/HappyHour')
const lunchdata = require('./seedsLunch.json')
const happyhourdata = require('./seedsHappyHour.json')

LunchSpot.remove()
.then(() => {
  return LunchSpot.collection.insert(lunchdata)
})
.then(() => {
  process.exit()
})

HappyHour.remove()
.then(() => {
  return HappyHour.collection.insert(happyhourdata)
})
.then(() => {
  process.exit()
})
