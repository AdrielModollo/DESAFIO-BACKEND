const User = require('../models/User');

module.exports = {
    async find(req, res) {
        const users = await User.findAll({
            order: [
                ['created_at', 'DESC'],
            ],
            include: [
                { association: 'accounts' }
            ]
        });

        return res.json(users)
    },

    async findOne(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: [
                { association: 'accounts' }
            ]
        })

        return res.json(user);
    },

    async create(req, res) {
        const { name, email, birthday, balance } = req.body;

        const user = await User.create({ name, email, birthday, balance });

        return res.json(user)
    },

    async update(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id)

        const result = await user.update(req.body, {
            where: { id: user_id },
            returning: true
        });

        res.status(200).json({ success: true, result });
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