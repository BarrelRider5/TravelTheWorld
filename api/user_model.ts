import bcrypt from 'bcrypt'
import { Pool } from 'pg'

export interface User {
  email: string
  password: string
  user_id: string
}

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST || 'localhost',
  database: 'travel',
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT) || 5432
})

export const attemptSignin = async ({ email, password }) => {
  let results = await getUser({ email })
  let user = results[0]
  let isMatch = await bcrypt.compare(password, user.password)
  let response = {
    userId: '',
    error: ''
  }

  console.log(isMatch)

  // npx cross-env DB_USER=jmulder5 DB_PASS=cougar92 ts-node index.ts

  if (!user) response.error = 'email'
  else if (!isMatch) response.error = 'password'
  else response.userId = user.user_id

  return response
}

export const getUser = ({ email }) => {
  return new Promise<User[]>(function (resolve, reject) {
    pool.query(
      `SELECT * FROM users where email = $1`,
      [email],
      (error, results) => {
        if (error) {
          return reject(error)
        }
        resolve(results.rows)
      }
    )
  })
}

export const createUser = async ({ email, password, user_id }) => {
  password = await bcrypt.hash(password, 8)

  return new Promise(function (resolve, reject) {
    pool.query(
      `INSERT INTO users (email, password, user_id) VALUES ($1, $2, $3) RETURNING user_id`,
      [email, password, user_id],
      (error, results) => {
        if (error) {
          return reject(error)
        }
        resolve(results.rows[0])
      }
    )
  })
}

export const deleteUser = (rawId) => {
  return new Promise(function (resolve, reject) {
    const id = parseInt(rawId)
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        return reject(error)
      }
      resolve(`User deleted with ID: ${id}`)
    })
  })
}
