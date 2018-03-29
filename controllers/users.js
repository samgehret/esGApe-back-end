const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
// more commit comments
const passport = require('../config/passport')
const config = require('../config/config')

const mongoose = require('../models/User')
const User = mongoose.model('User')

router.post('/signup', (req, res) => {
    // if email && passwords are submitted in form,
    // put those values into newUser
  if (req.body.email && req.body.password) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    }
        // check if form email is already in use
    User.findOne({email: req.body.email})
            .then((user) => {
                // if not, create newUser with that email
                // and password
              if (!user) {
                User.create(newUser)
                        .then(user => {
                // not exactly sure, but JWT with the users ID is created
                // here, res.json returns the header/payload/signature with the token
                          if (user) {
                            var payload = {
                              id: newUser.id
                            }
                            var token = jwt.encode(payload, config.jwtSecret)
                            res.json({
                              token: token
                            })
                          } else {
                            res.sendStatus(404)
                          }
                        })
              } else {
                res.sendStatus(401)
              }
            })
  } else {
    res.sendStatus(400)
  }
})

router.post('/login', (req, res) => {
    // if email && passwords are submitted in form,
  if (req.body.email && req.body.password) {
    // if the password in the form matches the password in the database
    // for that specific user, set payload to user id
    User.findOne({email: req.body.email}).then(user => {
      if (user) {
        if (user.password === req.body.password) {
          var payload = {
            id: user.id
          }
    // token returned to browser
          var token = jwt.encode(payload, config.jwtSecret)
          res.json({
            token: token
          })
        } else {
          res.sendStatus(404)
        }
      } else {
        res.sendStatus(401)
      }
    })
  } else {
    res.sendStatus(400)
  }
})
module.exports = router
