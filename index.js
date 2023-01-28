const express = require('express');

const app = express();
const port = 5000;

app.use('/', (req, res) => {
    res.json({message: "Hello!"})
})

app.listen(port, () => {
    console.log(`Starting on port ${port}`);
});
