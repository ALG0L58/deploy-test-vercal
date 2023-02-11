const {Schema, model} = require('mongoose')
const Todo = require('./Todo')

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    tasks: [Todo]
})

module.exports = model("User", User)