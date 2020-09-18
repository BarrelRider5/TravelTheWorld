// const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'jmulder5',
//     host: 'localhost',
//     database: 'travel',
//     password: 'cougar92',
//     port: 5432,
// });

// const getVisited = () => {
//     return new Promise(function (resolve, reject) {
//         pool.query('SELECT * FROM visitors ORDER BY id ASC', (error, results) => {
//             if (error) {
//                 return reject(error)
//             }
//             resolve(results.rows);
//         })
//     })
// }
// const createVisited = (body) => {
//     return new Promise(function (resolve, reject) {
//         const { name, continent, country, date, user_id } = body
//         pool.query('INSERT INTO visited (name, continent, country, date, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
//             [name, continent, country, date, user_id], (error, results) => {
//             if (error) {
//                 return reject(error)
//             }
//             resolve(`A new visited location has been added added: ${results.rows[0]}`)
//         })
//     })
// }
// const deleteVisited = (rawId) => {
//     return new Promise(function (resolve, reject) {
//         const id = parseInt(rawId)
//         pool.query('DELETE FROM visited WHERE id = $1', [id], (error, results) => {
//             if (error) {
//                 return reject(error)
//             }
//             resolve(`Visited location deleted with ID: ${id}`)
//         })
//     })
// }

// module.exports = {
//     getVisited,
//     createVisited,
//     deleteVisited,
// }
