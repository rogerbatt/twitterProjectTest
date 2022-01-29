// config inicial
const express = require('express')
const app = express()

// depois do db
const mongoose = require('mongoose')

const Tweets = require('./models/Tweets')
const Users = require('./models/Users')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// rotas
app.post('/tweetar', async (req, res) => {
  const { name, image, msg } = req.body

  const tweet = {
    name,
    image,
    msg,
  }

  try {
    await Tweets.create(tweet)

    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/tweet', async (req, res) => {
  try {
    const tweet = await Tweets.find()

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.status(200).json(tweet)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/users', async (req, res) => {
  try {
    const users = await Users.find()

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})


app.get('/tweet/:id', async (req, res) => {
  const id = req.params.id

  try {
    const tweet = await Tweets.findOne({ _id: id })

    if (!tweet) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(tweet)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.patch('/tweet/:id', async (req, res) => {
  const id = req.params.id

  const { name, image, msg } = req.body

  const tweet = {
    name,
    image,
    msg,
  }

  try {
    const updateTweet = await Tweets.updateOne({ _id: id }, tweet)

    if (updateTweet.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(tweet)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/tweet/:id', async (req, res) => {
  const id = req.params.id

  const tweet = await Tweets.findOne({ _id: id })

  if (!tweet) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await Tweets.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/', async (req, res) => {
  try {
    const tweet = await Tweets.find()
    const users = await Users.find()

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.status(200).json(tweet && users)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})


mongoose
  .connect(
    'mongodb+srv://rogerbatt:CHELLfRbWLAxlq3t@cluster0.wqppm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3001)
  })
  .catch((err) => console.log(err))
