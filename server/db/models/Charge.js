const Sequelize = require('sequelize');
const db = require('../config');

const Charge = db.define('charge', {
  total: Sequelize.INTEGER,
});

module.exports = Charge;
