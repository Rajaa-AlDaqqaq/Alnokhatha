const multer = require('multer')
const { Harbor } = require('../models/Harbor')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
  }
})
var upload = multer({
  storage: storage
}).single('path')

exports.GetHarbors = async (req, res) => {
  try {
    const harbors = await Harbor.find({})
    res.send(harbors)
  } catch (error) {
    throw error
  }
}
//GET ONE HARBOR
exports.GetHarbor = async (req, res) => {
  try {
    const harbor = await Harbor.findById(req.params.harbor_id)
    res.send(harbor)
  } catch (error) {
    throw error
  }
}
//CREATE HARBOR
exports.CreateHarbor = async (req, res) => {
  try {
    const harbor = await Harbor.create({ ...req.body })
    res.send(harbor)
  } catch (error) {
    throw error
  }
}
//UPDATE HARBOR
exports.UpdateHarbor = async (req, res) => {
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

exports.DeleteHarbor = async (req, res) => {
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
