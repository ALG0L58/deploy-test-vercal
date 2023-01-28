const express = require('express');
const authRouter = require('./authRouter')
const cors = require('cors')

const app = express();
const port = 5000;

app.use(express.json())
app.use(cors())

app.use("/auth", authRouter)

app.listen(port, () => {
    console.log(`Starting on port ${port}`);
});
