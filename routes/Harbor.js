const router = require('express').Router()
const harborCtrl = require('../controllers/Harbor')

router.get('/harbors', harborCtrl.GetHarbors)
router.post('/create', harborCtrl.CreateHarbor)
router.put('/update/:harbor_id', harborCtrl.UpdateHarbor)
router.delete('/delete/:harbor_id', harborCtrl.DeleteHarbor)
module.exports = router
