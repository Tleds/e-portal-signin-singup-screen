const Sequelize = require('sequelize');
const config = require('./database/config/database');

const Users = require('./database/models/Users');

const connection = new Sequelize(config);

Users.init(connection);

module.exports = connection;
