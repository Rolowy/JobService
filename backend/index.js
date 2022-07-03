// const mongoose = require('mongoose')


// const express = require('express')
// const app = express()

// const routes = require('./routes/routes')

// const Users = require("./models/Users")
// const Role = require("./models/Role")

// const database = require('./config/db')

// mongoose.connect(`mongodb+srv://${database.LOGIN}:${database.PASSWORD}@${database.HOST}/?retryWrites=true&w=majority`, () => {
//     console.log('Connected')
// })
// app.use('/api', routes)
// app.listen(8000, () => {
//     console.log('Server uruchomiony na porcie 8000')
//     console.log('http://localhost:8000')
// })

const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request, response) => {
     response.send("Hello from Firebase!");
});