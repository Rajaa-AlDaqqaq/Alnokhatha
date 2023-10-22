const mongoose = require('mongoose')

const boatSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  size: Number,
  license_type: {
    type: String,
    required: true
  },
  license_expiry_date: {
    type: Date
  },
  picture: { type: String }
})

const Boat = mongoose.model('Boat', boatSchema)

module.exports = { Boat }
