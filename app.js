const express = require('express')
const app = express()
const lunchSpotsController = require('./controllers/lunchspots')
const cors = require('cors')

app.use(cors())
app.use('/lunchspots', lunchSpotsController)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3002, () => {
  console.log('app listening on port 3002')
})
