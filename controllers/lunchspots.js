const express = require('express')
const router = express.Router()
const LunchSpot = require('../models/LunchSpot')

router.get('/', (req, res) => {
  LunchSpot.find({})
    .then(lunchspots => res.json(lunchspots))
})

router.get('/:id', (req, res) => {
  LunchSpot.findOne({_id: req.params.id})
    .then(lunchspot => res.json(lunchspot))
})

module.exports = router
