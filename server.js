const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
//Load dotenv
require('dotenv').config()
//Morgon logs //npm install morgan when use it
const HarborRouter = require('./routes/Harbor')
const SlipRouter = require('./routes/Boat_Slip')
const BoatRouter = require('./routes/Boat')
const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/harbor', HarborRouter)
app.use('/boatSlip', SlipRouter)
app.use('/boat', BoatRouter)
app.use('/', (req, res) => {
  res.send(`Connected!`)
})
app.listen(PORT, () => {
  console.log(`This App is Running on port ${PORT}`)
})

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
