const Sequelize = require('sequelize');
const db = require('../config');

const RecurringBill = db.define('recurringbill', {
  text: Sequelize.STRING,
  total: Sequelize.FLOAT,
  dueDate: Sequelize.DATE,
});

module.exports = RecurringBill;
