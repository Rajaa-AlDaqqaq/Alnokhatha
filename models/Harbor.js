const { Schema } = require('mongoose')
const mongoose = require('mongoose')
const harborSchema = mongoose.Schema({
  name: String,
  location: String,
  Boat_Slips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Boat_Slips'
    }
  ],
  User: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
})
const Harbor = mongoose.model('Harbor', harborSchema)
module.exports = { Harbor }
