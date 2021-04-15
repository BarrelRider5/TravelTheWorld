import { Router } from 'express'
import { attemptSignin, createUser, deleteUser, getUser } from './user_model'

export const usersRouter = Router()

usersRouter.post('/create', (req, res) => {
  createUser(req.body)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      console.log('error: ', error)
      res.status(500).send(error)
    })
})

usersRouter.post('/attemptSignin', (req, res) => {
  attemptSignin(req.body)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      console.log('error: ', error)
      res.status(500).send(error)
    })
})

usersRouter.post('/get', (req, res) => {
  getUser(req.body)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      console.log('error: ', error)
      res.status(500).send(error)
    })
})

usersRouter.delete('/delete/:id', (req, res) => {
  deleteUser(req.params.id)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
})
