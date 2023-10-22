const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '' + Date.now() + '' + file.originalname)
  }
})
var upload = multer({ storage: storage }).single('pic')

router.post('/login', controller.Login)
router.post('/register', upload, controller.Register)
router.put(
  '/update/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)

router.get('/showprofile/:user_id', controller.showprofile)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = router
