const { Harbor } = require('../models/Harbor')

const GetHarbors = async (req, res) => {
  try {
    const harbors = await Harbor.find({})
    res.send(harbors)
  } catch (error) {
    throw error
  }
}

const CreateHarbor = async (req, res) => {
  try {
    const harbor = await Harbor.create({ ...req.body })
    res.send(harbor)
  } catch (error) {
    throw error
  }
}

const UpdateHarbor = async (req, res) => {
  try {
    const harbor = await Harbor.findByIdAndUpdate(
      req.params.harbor_id,
      req.body,
      {
        new: true
      }
    )
    res.send(harbor)
  } catch (error) {
    throw error
  }
}

const DeleteHarbor = async (req, res) => {
  try {
    await Harbor.deleteOne({ _id: req.params.harbor_id })
    res.send({
      msg: 'Harbor Deleted',
      payload: req.params.harbor_id,
      status: 'OK'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetHarbors,
  CreateHarbor,
  UpdateHarbor,
  DeleteHarbor
}
