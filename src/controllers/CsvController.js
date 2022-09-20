const User = require('../models/User');
const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("owinteractive.csv");

module.exports = {
    async csv(req, res) {
        const users = await User.findAll({
            order: [
                ['created_at', 'DESC'],
            ],
        });

        const jsonData = JSON.parse(JSON.stringify(users));

        fastcsv
            .write(jsonData, { headers: true })
            .on("finish", function () {
                console.log("Write to owinteractive.csv successfully!");
            })
            .pipe(ws);

        return res.json(users)
    }
}
