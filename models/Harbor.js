const { Schema } = require('mongoose')
const mongoose = require('mongoose')
const harborSchema = mongoose.Schema(
  {
    name: String,
    location: String,
    User: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    timestamps: true
  }
)
const Harbor = mongoose.model('Harbor', harborSchema)
module.exports = { Harbor }
