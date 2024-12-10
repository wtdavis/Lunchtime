

export function dbQuery (name, status) {
    
    const mysql = require('mysql')

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'lunchtime',
        password: 'lunchtime',
        database: 'lunchtime'
    });
    
    const check = function (studentFName, studentLName) {
        connection.connect();
        let studentsQueryRes = connection.query(`SELECT * FROM students WHERE studentFName LIKE ${studentFName} AND WHERE studentLName LIKE ${studentLName}`)
    }

    const uncheck = function () {
 
    }

    connection.connect();
    
    connection.query("");
    
    connection.end();
}

