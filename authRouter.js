const Router = require('express')
const router = new Router()
const userController = require('./controllers/userController')
const todoController = require('./controllers/todoController')
const {check} = require('express-validator')
const authMiddleware = require('./middleware/auth.middleware')

const validation = [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 5 and shorter than 12').isLength({min: 5, max: 12})
]

//---------- Users-routes ----------
router.post('/registration', validation, userController.addUser);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.auth);

//---------- Todos-routes ----------
router.post('/user/todos', todoController.getTodos);
router.post('/user/addTodo', todoController.addTodo);
router.put('/user/changeTodo', todoController.changeTodo);
router.post('/user/removeTodo', todoController.removeTodo);

module.exports = router;

