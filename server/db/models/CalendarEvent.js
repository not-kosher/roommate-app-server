const Sequelize = require('sequelize');
const db = require('../config');

const CalendarEvent = db.define('calendarevent', {
  text: Sequelize.STRING,
  startDate: Sequelize.DATE,
  endDate: Sequelize.DATE,
  type: Sequelize.STRING,
});

module.exports = CalendarEvent;
