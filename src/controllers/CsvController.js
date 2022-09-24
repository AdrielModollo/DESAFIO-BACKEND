const User = require('../models/User');
const { csvService } = require('./services/csv-service')
const { Op } = require("sequelize");

module.exports = {
    async csvAll(req, res) {
        const users = await User.findAll({
            order: [
                ['created_at', 'DESC'],
            ],
        });

        res.json(csvService(users));
    },

    async csvFilter(req, res) {
        const { createdAt } = req.query

        const users = await User.findAll({
            order: [
                ['created_at', 'DESC'],
            ],
            where: {
                created_at: {
                    [Op.startsWith]: createdAt
                },
            }
        });

        res.json(csvService(users));
    },
}
