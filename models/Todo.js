const {Schema} = require('mongoose')

const Todo = new Schema ({
    title: {type: String},
    completed: {type: Boolean, default: false},
    important: {type: Boolean, default: false}
})

module.exports = Todo