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

exports.EditRequest = async (req, res) => {
  try {
    const request = await Request.findByIdAndUpdate(
      req.params.request_id,
      req.body,
      {
        new: true
      }
    )
    res.send(request)
  } catch (error) {
    throw error
  }
}
