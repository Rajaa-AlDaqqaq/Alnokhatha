const { Schema } = require('mongoose')
const mongoose = require('mongoose')
const requestSchema = mongoose.Schema(
  {
    Boat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Boat'
    },
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    Harbor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Harbor'
    },

    boatSlip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'boatSlip'
    },
    StartDate: Date,
    ExpiryDate: Date,
    price: Number,
    Approved: Boolean
  },

  {
    timestamps: true
  }
)
const Request = mongoose.model('Request', requestSchema)
module.exports = { Request }
