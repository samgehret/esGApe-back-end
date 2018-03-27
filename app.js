const express = require('express')
const app = express()
const lunchSpotsController = require('./controllers/lunchspots')
const happyHoursController = require('./controllers/happyhours')
const cors = require('cors')

app.use(cors())
app.use('/lunchspots', lunchSpotsController)
app.use('/happyhours', happyHoursController)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3002, () => {
  console.log('app listening on port 3002')
})
