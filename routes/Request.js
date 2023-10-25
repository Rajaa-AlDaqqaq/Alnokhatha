const router = require('express').Router()
const RequestCtrl = require('../controllers/Request')
router.post('/add/:boat_id', RequestCtrl.AddRequest)
module.exports = router
