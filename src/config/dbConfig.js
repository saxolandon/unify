const mysql = require('mysql2')

require('dotenv').config()

// Create a connection to the database
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
})

// open the MySQL connection
// connection.connect((error) => {
//     if (error) throw error
//     console.log('Successfully connected to the database.')
// })

module.exports = pool.promise()
