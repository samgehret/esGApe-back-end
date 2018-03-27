const express = require('express')
const router = express.Router()
const HappyHour = require('../models/HappyHour')

router.get('/', (req, res) => {
  HappyHour.find({})
      .then(happyhours => res.json(happyhours))
})

router.get('/:id', (req, res) => {
  HappyHour.findOne({_id: req.params.id})
      .then(happyhour => res.json(happyhour))
})

module.exports = router
