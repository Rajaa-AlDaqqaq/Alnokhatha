const { Schema } = require('mongoose')
const mongoose = require('mongoose')
const boatSlipSchema = mongoose.Schema({
  number: String,
  price: Number,
  position: Number,
  Staring_Date: Date,
  Expiry_Date: Date,
  Approved: Boolean,
  Boat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boat'
  }
})
const boatSlip = mongoose.model('boatSlip', boatSlipSchema)
module.exports = { boatSlip }
