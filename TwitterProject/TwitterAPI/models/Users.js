const mongoose = require('mongoose')

const Users = mongoose.model('users', {
  name: String,
  email: String,
  image: String,
})

module.exports = Users
