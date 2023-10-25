const { Request } = require('../models/Request')

exports.AddRequest = (req, res) => {
  let request = new Request(req.body)
  request
    .save()
    .then(() => {
      res.send(request)
    })
    .catch((err) => {
      console.log(err)
    })
}
