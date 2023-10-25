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

exports.viewRequest = async (req, res) => {
  try {
    const request = await Request.find({})
    res.send(request)
  } catch (error) {
    throw error
  }
}

exports.DeleteRequest = async (req, res) => {
  try {
    await Request.deleteOne({ _id: req.params.request_id })
    res.send({
      msg: 'Request Deleted',
      payload: req.params.request_id,
      status: 'OK'
    })
  } catch (error) {
    throw error
  }
}
