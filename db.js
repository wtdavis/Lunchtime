import mysql from 'mysql2'
import bcrypt from 'bcrypt'

const lunchtimeConnectionObj = {
    host: 'localhost',
    user: 'lunchtime',
    password: 'lunchtime',
    database: 'lunchtime'
}

export function dbUserSetup () {
    const connection = mysql.createConnection(lunchtimeConnectionObj)
    let hash = bcrypt.hash()
    connection.connect();
    connection.query(`CREATE TABLE users (id index, username varchar(255), hash varchar(255), admin boolean`)
    connection.query(`INSERT INTO users (username, hash, admin) VALUES ('${process.env.admin}', ,1)`)
}

export function dbStudentsSetup () {
        const connection = mysql.createConnection(lunchtimeConnectionObj)
    connection.connect()
    // connection.query()
    connection.query('USE lunchtime');
    connection.query("DROP TABLE students;")
    connection.query("CREATE TABLE students (id int, studentFirstName varchar(255), studentLastName varchar(255), studentSocialist boolean);")
    connection.query("INSERT INTO students (studentFirstName, studentLastName, studentSocialist) VALUES ('john', 'jacob', 0)")
        connection.query("INSERT INTO students (studentFirstName, studentLastName, studentSocialist) VALUES ('sarah', 'jenkins', 1)")
         connection.query("INSERT INTO students (studentFirstName, studentLastName, studentSocialist) VALUES ('steven', 'evens', 1)")
          connection.query("INSERT INTO students (studentFirstName, studentLastName, studentSocialist) VALUES ('evelynda', 'evangelista', 0)")
    connection.end()
    console.log("db setup attempted")
}

export function dbTest () {
    const connection = mysql.createConnection(lunchtimeConnectionObj);
    connection.connect();
    let res = connection.query("SELECT * FROM students")
    connection.end()
    console.log("db test attempted")
    return res
}
 
 export function dbQuery (name, status) {

    const connection = mysql.createConnection(lunchtimeConnectionObj);

    const dbSetup = function () {
        connection.connect();
        connection.query('USE DATABASE LUNCHTIME');
        connection.query("INSERT INTO students (studentFirstName, studentLastName) VALUES ('john', 'jacobs')")
        // connection.query('USE TABLE students');
        let dbTestQuery = connection.query('SELECT * FROM students')
        console.log(dbTestQuery)
    }
    
    const check = function (studentFName, studentLName) {
        connection.connect();
        let studentsQueryRes = connection.query(`SELECT * FROM students WHERE studentFirstName LIKE ${studentFName} AND WHERE studentLastName LIKE ${studentLName}`)
    }


    connection.connect();
    
    connection.query("");
    
    connection.end();
}

