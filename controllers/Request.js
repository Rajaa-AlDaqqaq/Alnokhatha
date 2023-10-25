const { Request } = require('../models/Request')

exports.AddRequest = (req, res) => {
  let Request = new Request(req.body)
  Request.save()
    .then(() => {
      res.send(Request)
    })
    .catch((err) => {
      console.log(err)
    })
}
