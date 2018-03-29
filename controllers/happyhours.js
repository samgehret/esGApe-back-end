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
router.put('/:id', (req, res) => {
  HappyHour.findOneAndUpdate({_id: req.params.id}, req.body)
  .then(happyhour => {
    res.json(happyhour)
  })
})

router.put('/comments/:id', (req, res) => {
  HappyHour.findOne({ _id: req.params.id })
    .then(happyhour => {
      happyhour.comments.push({
        commentText: req.body.comment
      })
      happyhour.save()
    })
})

router.post('/', (req, res) => {
  HappyHour.create(req.body)
  .then(happyhour => res.json(happyhour))
})

router.delete('/:id', (req, res) => {
  HappyHour.findOneAndRemove({_id: req.params.id})
  .then(happyhour => res.json(happyhour))
})
module.exports = router
