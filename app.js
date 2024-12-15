// const express = require('express')
import express from 'express'
import { dbQuery, dbSetup, dbTest } from './db.js'


const app = express()
app.get('/', (req, res) => {
    dbSetup();
   let test = dbTest();
    res.test = test;
    res.send()
}
)



app.listen(3000)