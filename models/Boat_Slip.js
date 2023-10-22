const { Schema } = require('mongoose')
const mongoose = require('mongoose')
const boatSlipSchema = mongoose.Schema(
  {
    number: String,
    Harbor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Harbor'
    },
    Available: Boolean
  },
  {
    timestamps: true
  }
)
const boatSlip = mongoose.model('boatSlip', boatSlipSchema)
module.exports = { boatSlip }
