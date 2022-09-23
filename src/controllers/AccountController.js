const Account = require('../models/Account');
const User = require('../models/User');
const { verifyNewValue } = require('./services/verifyNewValue')

module.exports = {
    async create(req, res) {
        const { user_id } = req.params;
        const { debit, credit, estorn } = req.body;

        const user = await User.findByPk(user_id);

        console.log(user_id)

        const accountFound = await Account.findOne({ where: { user_id: user_id } });

        if (accountFound) {
            return res.status(400).json({ error: "User already has an account " })
        }

        if (!user) {
            return res.status(400).json({ error: "User not found " })
        }

        const total = verifyNewValue(debit, credit, estorn, user.balance)

        const account = await Account.create({ debit, credit, estorn, total, user_id })

        return res.json(account)
    },

    async deleteOne(req, res) {
        const { account_id } = req.params;

        const accountFound = await User.findByPk(account_id);

        if (!accountFound) {
            return res.status(400).json({ error: 'Account not found' });
        }

        Account.destroy({
            where: {
                id: account_id
            }
        });

        return res.json();
    }
}