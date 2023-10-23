const router = require('express').Router()
const slipCtrl = require('../controllers/Boat_Slip')
router.get('/slip/:boatSlip_id', slipCtrl.GetSlip)
router.post('/slips', slipCtrl.GetSlips)
router.put('/update/:boatSlip_id', slipCtrl.UpdateSlip)
router.post('/create', slipCtrl.slip_create_post)
router.delete('/delete/:boatSlip_id', slipCtrl.DeleteSlip)
module.exports = router
