// const express = require('express')
import express from 'express'
import { dbQuery, dbSetup, dbTest } from './db.js'


const app = express()
app.get('/', (req, res) => {
    dbSetup();
   let test = dbTest();
   console.log(test)
    res.test = test;
    res.send()
}
)
1
2
3

app.listen(3000)