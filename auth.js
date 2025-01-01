import mysql from 'mysql2'
import bcrypt from 'bcryptjs'

const dbConnectionObj = {
    host: 'localhost',
    user: 'lunchtime',
    password: 'lunchtime',
    database: 'lunchtime'
}

export function addUser (username, password) {
    const connection = mysql.createConnection(dbConnectionObj);
    connection.connect();
    let checkUser = connection.query(`SELECT user.* WHERE username = ${username}`)
    if (checkUser) {
        // return (error)
    } else {

    }
}


export function auth (username, password) {
    const connection = mysql.createConnection(dbConnectionObj)
    connection.connect()
    let user = connection.query(`SELECT user.* WHERE username = ${username}`)
    if (user) {
        
    }
}