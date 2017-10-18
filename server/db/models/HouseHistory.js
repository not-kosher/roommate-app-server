const Sequelize = require('sequelize');
const db = require('../config');

const HouseHistory = db.define('househistory', {
  text: Sequelize.STRING,
  type: Sequelize.STRING,
});

module.exports = HouseHistory;
