const express = require('express');
const app = express();
const User = require('./src/models/User')

app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Home');
});

app.post("/register", async (req, res) => {
    console.log(req.body)
    await User.create(req.body).then(() => {
        return res.json({
            error: false,
            message: "User registered successfully"
        });
    }).catch(() => {
        return res.status(400).json({
            error: true,
            message: "Error: User not registered successfully"
        });
    });
});

app.listen(8080, () => {
    console.log("Server initialize in port 8080");
});