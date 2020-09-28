import express from 'express'
import { attemptSignin, createUser, deleteUser, getUser } from './user_model'

const app = express()
const port = 3001

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log('here.....')
  next()
})

app.post('/users/create', (req, res) => {
  createUser(req.body)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      console.log('error: ', error)
      res.status(500).send(error)
    })
})

app.post('/users/attemptSignin', (req, res) => {
  attemptSignin(req.body)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      console.log('error: ', error)
      res.status(500).send(error)
    })
})

app.post('/users/get', (req, res) => {
  getUser(req.body)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      console.log('error: ', error)
      res.status(500).send(error)
    })
})

app.delete('/users/delete/:id', (req, res) => {
  deleteUser(req.params.id)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
