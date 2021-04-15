import { Router } from 'express'
import { createVisited, getVisited, deleteVisited } from './visited_model'

export const visitedRouter = Router()

visitedRouter.post('/create', (req, res) => {
  createVisited(req.body)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      console.log('error: ', error)
      res.status(500).send(error)
    })
})

visitedRouter.post('/get', (req, res) => {
  getVisited(req.body)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      console.log('error: ', error)
      res.status(500).send(error)
    })
})

visitedRouter.delete('/delete/:id', (req, res) => {
  deleteVisited(req.params.id)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
})
