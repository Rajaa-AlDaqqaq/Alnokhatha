const router = require('express').Router()
const slipCtrl = require('../controllers/Boat_Slip')
router.put('/update/:boatSlip_id', slipCtrl.UpdateSlip)
router.post('/create', slipCtrl.slip_create_post)
module.exports = router
