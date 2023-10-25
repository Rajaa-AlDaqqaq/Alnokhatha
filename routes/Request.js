const router = require('express').Router()
const RequestCtrl = require('../controllers/Request')

router.post('/add', RequestCtrl.AddRequest)

router.put('/edit/:request_id', RequestCtrl.EditRequest)

module.exports = router
