const router = require('express').Router()
const slipCtrl = require('../controllers/Boat_Slip')
router.put('/update/:slip_id', slipCtrl.UpdateSlip)

module.exports = router

router.get