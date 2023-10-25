const router = require('express').Router()
const RequestCtrl = require('../controllers/Request')
router.post('/add', RequestCtrl.AddRequest)
module.exports = router
