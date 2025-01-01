// const express = require('express')
import express from 'express'
import { dbQuery, dbStudentsSetup, dbTest } from './db.js'


const app = express()
app.get('/', (req, res) => {
    dbStudentsSetup();
   let test = dbTest();
   console.log(test)
    res.test = test;
    res.send()
}
)
1
2
3
4
4

app.listen(3000)