const mongoose = require('mongoose')

const harborSchema = require('./Harbor')
const Harbor = mongoose.model('Harbor', harborSchema)
module.exports = {
  Harbor
}
