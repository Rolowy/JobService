const mongoose = require('mongoose')
const Users = require("./Users")

mongoose.connect("mongodb+srv://abase:1234@cluster0.uyld5.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log('Connected')
})

const user = new Users({
    username: "Łukasz",
    password: "123"
})

user.save().then(() => console.log('User Saved'))