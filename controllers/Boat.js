const { Boat } = require('../models/Boat')

//add boat
exports.boat_create_post = (req, res) => {
  let boat = new Boat(req.body)

  boat
    .save()
    .then(() => {
      res.send(boat)
    })
    .catch((err) => {
      console.log(err)
    })
}

//GET view all boats
exports.boat_view_get = async (req, res) => {
  try {
    const boats = await Boat.find({})
    res.send(boats)
  } catch (error) {
    throw error
  }
}

//UPDATE boat
exports.boat_update_put = async (req, res) => {
  try {
    const boat = await Boat.findByIdAndUpdate(req.params.boat_id, req.body, {
      new: true
    })
    res.send(boat)
  } catch (error) {
    throw error
  }
}

//delete boat
exports.boat_delete = async (req, res) => {
  try {
    await Boat.deleteOne({ _id: req.params.boat_id })
    res.send({
      msg: 'Boat Deleted',
      payload: req.params.boat_id,
      status: 'OK'
    })
  } catch (error) {
    throw error
  }
}
