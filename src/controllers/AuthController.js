require("dotenv-safe").config();
const jwt = require('jsonwebtoken')
const User = require('../models/User');

module.exports = {
    async authLogin(req, res, next) {
        const { email, password } = req.body

        const user = await User.findOne({ where: { email } })

        if (email === user.email && password === user.password) {

            const id = user.id;
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 300
            });
            return res.json({ auth: true, token: token });
        }

        res.status(500).json({ message: 'Login inválido!' });
    }
}