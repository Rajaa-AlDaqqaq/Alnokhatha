const { boatSlip } = require('../models/Boat_Slip')
const { Harbor } = require('../models/Harbor')
//GET ALL SLIPS
exports.GetSlips = async (req, res) => {
  try {
    const slips = await boatSlip.find({})
    res.send(slips)
  } catch (error) {
    throw error
  }
}

//ADD SLIP
exports.slip_create_post = (req, res) => {
  let slip = new boatSlip(req.body)

  slip
    .save()
    .then(() => {
      res.send(slip)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.UpdateSlip = async (req, res) => {
  try {
    const boatslip = await boatSlip.findByIdAndUpdate(
      req.params.boatSlip_id,
      req.body,
      {
        new: true
      }
    )
    res.send(boatslip)
  } catch (error) {
    throw error
  }
}
