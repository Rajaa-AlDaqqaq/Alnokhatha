const multer = require('multer')
const router = require('express').Router()
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

const harborCtrl = require('../controllers/Harbor')
router.get('/harbors', harborCtrl.GetHarbors)
router.post('/create', harborCtrl.CreateHarbor)
router.put('/update/:harbor_id', harborCtrl.UpdateHarbor)
router.get('/:harbor_id', harborCtrl.GetHarbor)
router.delete('/delete/:harbor_id', harborCtrl.DeleteHarbor)
module.exports = router
