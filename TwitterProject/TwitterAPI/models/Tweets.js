const mongoose = require('mongoose')

const Tweets = mongoose.model('Tweets', {
  name: String,
  image: String,
  msg: String,
})

module.exports = Tweets
