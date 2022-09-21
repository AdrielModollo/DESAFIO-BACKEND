const User = require('../models/User');

module.exports = {
    async find(req, res) {
        const users = await User.findAll({
            order: [
                ['created_at', 'DESC'],
            ],
        });

        return res.json(users)
    },

    async findOne(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id)

        return res.json(user);
    },

    async create(req, res) {
        const { name, email, birthday } = req.body;

        const user = await User.create({ name, email, birthday });

        return res.json(user)
    },

    async deleteOne(req, res) {
        const { user_id } = req.params;

        const userFound = await User.findByPk(user_id);

        if (!userFound) {
            return res.status(400).json({ error: 'User not found' });
        }

        User.destroy({
            where: {
                id: user_id
            }
        });

        return res.json();
    }
}