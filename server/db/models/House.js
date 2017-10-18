const Sequelize = require('sequelize');
const db = require('../config');

const House = db.define('house', {
  name: Sequelize.STRING,
  key: Sequelize.STRING,
});

module.exports = House;
