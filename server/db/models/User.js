const Sequelize = require('sequelize');
const db = require('../config');

const User = db.define('user', {
  username: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  phone: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
});

module.exports = User;
