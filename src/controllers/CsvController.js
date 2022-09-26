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

        console.log(createdAt)

        const [ano, mes, dia] = createdAt.split('-');

        const users = await User.findAll({
            order: [
                ['created_at', 'DESC'],
            ],
            where: {
                created_at: {
                    [Op.startsWith]: mes + '-' + ano
                },
            }
        });

        res.json(csvService(users));
    },
}
