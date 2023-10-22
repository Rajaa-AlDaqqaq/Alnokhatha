const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    CPR: { type: Number, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    pic: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = userSchema
