const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'lunchtime',
    password: 'lunchtime',
    database: 'lunchtime'
});

connection.connect();

connection.query();

connection.end();