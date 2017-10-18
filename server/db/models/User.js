const Sequelize = require('sequelize');
const db = require('../config');

const User = db.define('user', {
  username: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.INTEGER,
});

module.exports = User;
