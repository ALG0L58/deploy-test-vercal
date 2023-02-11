const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./authRouter')
const PORT = process.env.port || 5000
const corsMiddleware = require('./middleware/cors.middleware')

const app = express()

app.use(express.json())
app.use(cors())
app.use(corsMiddleware)
app.use("/api", authRouter)

const start = () => {
    try {
        mongoose.connect(process.env.DATABASE_URL)
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    } catch(e) {
        console.log(e);
    }
}

start()