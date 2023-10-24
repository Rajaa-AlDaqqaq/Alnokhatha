const User = require('../models/User')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    console.log(req.body)
    const { email, type, password, name, CPR, phoneNumber } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send('A user with that email has already been registered!')
    } else {
      const user = await User.create({
        name,
        type,
        email,
        passwordDigest,
        CPR,
        pic: req.file.path,
        phoneNumber
      })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
    const { CPR, password } = req.body
    const user = await User.findOne({ CPR })
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    if (matched) {
      let payload = {...user._doc}
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'An error has occurred!' })
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    let user = await User.findById(req.params.user_id)
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      user = await User.findByIdAndUpdate(req.params.user_id, {
        passwordDigest
      })
      let payload = {
        id: user.id,
        email: user.email
      }
      return res.send({ status: 'Password Updated!', user: payload })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: 'Old Password did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred updating password!'
    })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

const showprofile = async (req, res) => {
  User.findById(req.params.user_id)

    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log(err)
    })
}

const EditProfile = async (req, res) => {
  User.findByIdAndUpdate(req.params.user_id, req.body, { new: true })

    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log(err)
    })

}

module.exports = {
  Register,
  Login,
  showprofile,
  EditProfile,
  UpdatePassword,
  CheckSession
}
