const { boatSlip } = require('../models/Boat_Slip')
const { Harbor } = require('../models/Harbor')
//GET ALL SLIPS
exports.GetSlips = async (req, res) => {
  try {
    const slips = await boatSlip.find({}).populate('Harbor')
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

//UPDATE sLIP -
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

//DELETE SLEP
exports.DeleteSlip = async (req, res) => {
  try {
    await boatSlip.deleteOne({ _id: req.params.boatSlip_id })
    res.send({
      msg: 'SLip Deleted',
      payload: req.params.boatSlip_id,
      status: 'OK'
    })
  } catch (error) {
    throw error
  }
}

exports.GetSlip = async (req, res) => {
  try {
    const slip = await boatSlip
      .findById(req.params.boatSlip_id)
      .populate('Harbor')
    res.send(slip)
  } catch (error) {
    throw error
  }
}
