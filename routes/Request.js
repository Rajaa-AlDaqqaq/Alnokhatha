const router = require('express').Router()
const RequestCtrl = require('../controllers/Request')

router.post('/add', RequestCtrl.AddRequest)
router.put('/edit/:request_id', RequestCtrl.EditRequest)
router.get('/viewRequests', RequestCtrl.viewRequest)

module.exports = router
