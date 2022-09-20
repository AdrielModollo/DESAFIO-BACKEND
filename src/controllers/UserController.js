const User = require('../models/User');

module.exports = {
    async find(req, res) {
        const users = await User.findAll();

        return res.json(users)
    },

    async findOne(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id)
    
        return res.json(user);
    },

    async store(req, res) {
        const { name, email, birthday } = req.body;

        const user = await User.create({ name, email, birthday });

        return res.json(user)
    }
}