// const Todo = require('./models/Todo')

class authController {
    async getTodos(req, res){
        try {
            // const todos = await Todo.find()
            res.json("todos")
        } catch (e) {
            console.log(e);
        }
    }

    async addTodo(req, res){
        try {
            // const todos = await Todo.find()
            res.json("todos2")
        } catch (e) {
            console.log(e);
        }
    }
}
//     async addTodo(req, res){
//         try {
//             const {title} = req.body
//             const todo = new Todo({title})
//             await todo.save()
//             return res.json({message: 'Task successfully added'})
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     async removeTodo(req, res){
//         try {
//             const {title} = req.body
//             await Todo.deleteOne({title: title})
//             return res.json({message: 'Task successfully remove'})
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     async changeTodo(req, res){
//         try {
//             const {title, dataChange, select} = req.body
//             if (select == "completed") {
//                 await Todo.updateOne(
//                     {title: title},
//                     {
//                         $set: {
//                             completed: dataChange
//                         }
//                     }
//                 )
//             }
//             if(select == "title") {
//                 await Todo.updateOne(
//                     {title: title},
//                     {
//                         $set: {
//                             title: dataChange
//                         }
//                     }
//                 )
//             }
//             if(select == "important") {
//                 await Todo.updateOne(
//                     {title: title},
//                     {
//                         $set: {
//                             important: dataChange
//                         }
//                     }
//                 )
//             }
            
//             return res.json({message: 'Task successfully change'})
//         } catch (e) {
//             console.log(e);
//         }
//     }
// }

module.exports = new authController()