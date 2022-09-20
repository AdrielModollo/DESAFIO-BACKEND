const express = require('express');

const app = express ();

const db = require('./src/models/db');

app.get('/', async (req, res) => {
    res.send('Home teste');
});

app.listen(8080, () => {
    console.log("Server initialize in port 8080");
});