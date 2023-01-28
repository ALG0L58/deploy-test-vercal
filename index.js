const express = require('express');
const authRouter = require('./authRouter')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 5000;

const app = express();

app.use(express.json())
app.use(cors())

app.use("/auth", authRouter)

const start = () => {
    try {
        mongoose.connect("mongodb+srv://algol58:algol58@todolist.ihjjriz.mongodb.net/?retryWrites=true&w=majority");
        console.log('conection...');
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    } catch(e) {
        console.log(e);
    }
}

start()
