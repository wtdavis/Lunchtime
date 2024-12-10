const express = require('express')
const { dbQuery } = require('./db')


const app = express()

app.get('/', (req, res) => {
    dbQuery(req.studentFname, req.studentLName)
    res.send("hello from expresss")
}
)



app.listen(3000)