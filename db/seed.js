const LunchSpot = require('../models/LunchSpot')
const data = require('./seeds.json')

LunchSpot.remove()
.then(() => {
  return LunchSpot.collection.insert(data)
})
.then(() => {
  process.exit()
})
