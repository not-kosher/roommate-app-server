const Sequelize = require('sequelize');
const db = require('../config');

const Bill = db.define('bill', {
  text: Sequelize.STRING,
  total: Sequelize.INTEGER,
  dueDate: Sequelize.DATE,
});

module.exports = Bill;
