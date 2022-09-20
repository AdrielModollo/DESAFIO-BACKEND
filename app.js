const express = require('express');

const app = express ();

app.get('/', async (req, res) => {
    res.send('Home');
});

app.post("/register", async (req, res) => {
    res.send("Register users")
});

app.listen(8080, () => {
    console.log("Server initialize in port 8080");
});