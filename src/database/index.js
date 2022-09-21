const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const User = require('../models/User')
const Account = require('../models/Account')

const connection = new Sequelize(dbConfig);

User.init(connection);
Account.init(connection);

Account.associate(connection.models);

module.exports = connection;