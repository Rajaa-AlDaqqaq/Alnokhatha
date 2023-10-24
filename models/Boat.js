const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const boatSchema = mongoose.Schema(
  {
    name: String,
    number: Number,
    size: Number,
    license_type: String,
    license_expiry_date: Date,
    picture: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true //means createdAt and updateAt
  }
)

const Boat = mongoose.model('Boat', boatSchema)

module.exports = { Boat }
