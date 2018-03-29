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
router.put('/:id', (req, res) => {
  LunchSpot.findOneAndUpdate({_id: req.params.id}, req.body)
  .then(lunchspot => {
    res.json(lunchspot)
  })
})

router.put('/comments/:id', (req, res) => {
  LunchSpot.findOne({ _id: req.params.id })
    .then(lunchspot => {
      lunchspot.comments.push({
        commentText: req.body.comment
      })
      lunchspot.save()
    })
})
router.post('/', (req, res) => {
  LunchSpot.create(req.body)
  .then(lunchspot => res.json(lunchspot))
})

router.delete('/:id', (req, res) => {
  LunchSpot.findOneAndRemove({_id: req.params.id})
  .then(lunchspot => res.json(lunchspot))
})

module.exports = router