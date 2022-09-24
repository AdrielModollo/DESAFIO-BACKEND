const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("owinteractive.csv");

function csvService(users) {

    const jsonData = JSON.parse(JSON.stringify(users));

    fastcsv
        .write(jsonData, { headers: true, delimiter: '|', quote: "," })
        .on("finish", function () {
            console.log("Write to owinteractive.csv successfully!");
        })
        .pipe(ws);

    return users
}

module.exports = { csvService }