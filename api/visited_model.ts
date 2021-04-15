import { Pool } from 'pg'

export interface Visited {
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

export const getVisited = ({ location_name }) => {
  return new Promise<Visited[]>(function (resolve, reject) {
    pool.query(
      `SELECT * FROM visited where location_name = $1`,
      [location_name],
      (error, results) => {
        if (error) {
          return reject(error)
        }
        resolve(results.rows)
      }
    )
  })
}

export const createVisited = async ({ id, location_name, visit_date }) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `INSERT INTO visited (id, location_name, visit_date) VALUES ($1, $2, $3) RETURNING id`,
      [location_name, id, visit_date],
      (error, results) => {
        if (error) {
          return reject(error)
        }
        resolve(results.rows[0])
      }
    )
  })
}

export const deleteVisited = (rawId) => {
  return new Promise(function (resolve, reject) {
    const id = parseInt(rawId)
    pool.query('DELETE FROM visited WHERE id = $1', [id], (error, results) => {
      if (error) {
        return reject(error)
      }
      resolve(`User deleted with ID: ${id}`)
    })
  })
}
