const express = require('express')
const router = express.Router()

// router.use(express.urlencoded({ extended: true }))

//controller
const boatCtrl = require('../controllers/Boat')

router.post('/addBoat', boatCtrl.boat_create_post)
router.get('/viewBoats', boatCtrl.boat_view_get)
router.put('/updateBoat/:boat_id', boatCtrl.boat_update_put)
router.delete('/delete/:boat_id',boatCtrl.boat_delete)

module.exports = router
