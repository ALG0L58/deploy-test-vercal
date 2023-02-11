const User = require('../models/User')

class todoController {
    async getTodos(req, res) {
        try {
            const {idUser} = req.body
            const user = await User.findOne({_id: idUser})
            const todos = user.tasks
            res.json(todos)
        } catch (e) {
            console.log(e)
        }
    }

    async addTodo(req, res) {
        try {
            const {idUser, title} = req.body
            const user = await User.findOne({_id: idUser})
            user.tasks.push({title: title}) 
            res.json(user)
            await user.save()
        } catch (e) {
            console.log(e);
        }
    }

    async removeTodo(req, res) {
        try {
            const {idUser, idTodo} = req.body
            const user = await User.findOne({_id: idUser})
            user.tasks.id(idTodo).remove()
            res.json(user)
            await user.save()
        } catch (e) {
            console.log(e);
        }
    }

    async changeTodo(req, res) {
        try {
            const {idUser, idTodo, dataChange, select = "title"} = req.body
            const user = await User.findOne({_id: idUser})
            const todo = user.tasks.id(idTodo)
            todo[`${select}`] = dataChange
            await user.save()
            res.json(todo)
            await user.save()
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new todoController()