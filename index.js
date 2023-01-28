const express = require('express');
const authRouter = require('./authRouter')

const app = express();
const port = 5000;

app.use(express.json())

app.use("/auth", authRouter)

app.listen(port, () => {
    console.log(`Starting on port ${port}`);
});
