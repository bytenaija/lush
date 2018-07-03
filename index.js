const express = require('express');
const path = require('path');

const app = express();

app.get("/", (req, res, next) => {
    console.log(path.join(__dirname, 'static', '/index.html'));
    res.sendFile(path.join(__dirname, 'static', '/index.html'))
})

app.get("/about", (req, res, next) => {
    console.log(path.join(__dirname, 'static', '/index.html'));
    res.sendFile(path.join(__dirname, 'static', '/about.html'))
})


let port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})