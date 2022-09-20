const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { name, email, birthday } = req.body;

        const user = await User.create({ name, email, birthday });

        return res.json(user)
    }
}