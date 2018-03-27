const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// added user controller. is .js required?
const userController = require('./controllers/users')
const lunchSpotsController = require('./controllers/lunchspots')
const happyHoursController = require('./controllers/happyhours')
const cors = require('cors')


// JWT / passport dependencies
const passport = require('./config/passport')()
app.use(passport.initialize())
app.use(bodyParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use('/lunchspots', lunchSpotsController)
app.use('/happyhours', happyHoursController)
// added user controller route
app.use('/users', userController)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3002, () => {
  console.log('app listening on port 3002')
})
