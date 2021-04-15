import express from 'express'
import { usersRouter } from './user_functions'
import { visitedRouter } from './visited_functions'

const app = express()
const port = 5432

app.use(express.json())
app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', '*')
  next()
})

app.use('/users', usersRouter)

app.use('/visited', visitedRouter)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
