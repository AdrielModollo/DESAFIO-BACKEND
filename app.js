const express = require('express');

const app = express ();

app.get('/', async (req, res) => {
    res.send('Home teste');
});

app.listen(8080, () => {
    console.log("Server initialize in port 8080")
});