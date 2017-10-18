const Sequelize = require('sequelize');
const db = require('../config');

const HouseNotification = db.define('housenotification', {
  type: Sequelize.STRING,
  text: Sequelize.STRING,
});

module.exports = HouseNotification;
