const express = require('express')
const bodyParser = require('body-parser')

// init app
const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

// routes
const hotelRoutes = require('./routes/hotel')

// routes use
app.use('/api/v1/hotel', hotelRoutes)

module.exports = app
