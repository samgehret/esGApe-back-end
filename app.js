const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// added user controller. is .js required?
const userController = require('./controllers/users')
const lunchSpotsController = require('./controllers/lunchspots')
const happyHoursController = require('./controllers/happyhours')
const cors = require('cors')
const methodOverride = require('method-override')

// JWT / passport dependencies
const passport = require('./config/passport')()
app.use(passport.initialize())
app.use(bodyParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(cors())
app.use('/lunchspots', lunchSpotsController)
app.use('/happyhours', happyHoursController)
// added user controller route
app.use('/users', userController)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.set('port', process.env.PORT || 3002)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
