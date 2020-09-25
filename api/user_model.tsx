const Pool = require('pg').Pool
const bcrypt = require('bcrypt')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'travel',
  password: 'jello111',
  port: 5432
})

const attemptSignin = async ({ email, password }) => {
  let results = await getUser({ email })
  let user = results[0]
  let isMatch = await bcrypt.compare(password, user.password)
  let response = {
    userId: '',
    error: ''
  }

  console.log(isMatch)

  if (!user) response.error = 'email'
  else if (!isMatch) response.error = 'password'
  else response.userId = user.user_id

  return response
}

const getUser = ({ email }) => {
  return new Promise(function (resolve, reject) {
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
const createUser = async ({ email, password, user_id }) => {
  password = await bcrypt.hash(password, 8)

  return new Promise(function (resolve, reject) {
    pool.query(
      `INSERT INTO users (email, password, user_id) VALUES ($1, $2, $3) RETURNING *`,
      [email, password, user_id],
      (error, results) => {
        if (error) {
          return reject(error)
        }
        resolve(`A new user has been added added: ${results.rows[0]}`)
      }
    )
  })
}
const deleteUser = (rawId) => {
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

module.exports = {
  getUser,
  attemptSignin,
  createUser,
  deleteUser
}