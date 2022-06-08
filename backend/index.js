const mongoose = require('mongoose')

const Users = require("./models/Users")
const Role = require("./models/Role")

const database = require('./config/db')

mongoose.connect(`mongodb+srv://${database.LOGIN}:${database.PASSWORD}@${database.HOST}/?retryWrites=true&w=majority`, () => {
    console.log('Connected')
})
