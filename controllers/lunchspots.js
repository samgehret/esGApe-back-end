const express = require('express')
const router = express.Router()
const LunchSpot = require('../models/LunchSpot')

router.get('/', (req, res) => {
  LunchSpot.find({})
    .then(lunchspots => res.json(lunchspots))
})

module.exports = router
