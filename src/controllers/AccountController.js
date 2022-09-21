const Account = require('../models/Account');
const User = require('../models/User');

module.exports = {
    async create(req, res) {
        const { user_id } = req.params;
        const { debit, credit, estorn, total } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: "User not found "})
        }

        const account = await Account.create({ debit, credit, estorn, total, user_id})

        return res.json(account)
    },
}