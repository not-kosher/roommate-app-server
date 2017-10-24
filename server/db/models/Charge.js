const Sequelize = require('sequelize');
const db = require('../config');

const Charge = db.define('charge', {
  total: Sequelize.FLOAT,
  billText: Sequelize.STRING,
});

module.exports = Charge;
