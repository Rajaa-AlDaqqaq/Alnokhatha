const { boatSlip } = require('../models/Boat_Slip')
const GetSlips = async (req, res) => {
  try {
    const slips = await boatSlip.find({})
    res.send(slips)
  } catch (error) {
    throw error
  }
}

const UpdateSlip = async (req, res) => {
  try {
    const boatSlip = await boatSlip.findByIdAndUpdate(
      req.params.boatSlip_id,
      req.body,
      {
        new: true
      }
    )
    res.send(boatSlip)
  } catch (error) {
    throw error
  }
}
module.exports = { UpdateSlip, GetSlips }
