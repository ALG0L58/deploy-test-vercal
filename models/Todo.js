const {Schema, model} = require('mongoose')


const Todo = new Schema ({
    title: String,
    completed: {type: Boolean, default: false},
    important: {type: Boolean, default: false},
})

module.exports = model("Todo", Todo)