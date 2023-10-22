const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
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

const User = mongoose.model('user', userSchema)


module.exports = User

