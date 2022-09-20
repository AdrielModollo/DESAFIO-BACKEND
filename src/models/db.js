const Sequelize = require('sequelize');

const connection = new Sequelize('owinteractive', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

connection.authenticate()
.then(function(){
    console.log("Conection successful")
}).catch(function(){
    console.log('Error: Connection not successful')
})

module.exports = connection;