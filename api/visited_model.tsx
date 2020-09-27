const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'travel',
  password: 'jello111',
  port: 5432
})

const bcrypt = require('bcrypt')

const createVisited = async ({ email, password, user_id }) => {
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
const deleteVisited = (rawId) => {
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
const getVisited = ({ email }) => {
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

module.exports = {
  createVisited,
  deleteVisited,
  getVisited
}
