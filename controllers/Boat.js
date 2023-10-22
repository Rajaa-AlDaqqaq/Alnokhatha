const express = require('express')
const router = express.Router()

router.use(express.urlencoded({ extended: true }))

const methodOverride = require('method-override')
router.use(methodOverride('_method'))

//controller
const boatCtrl = require('../controllers/Boat')


