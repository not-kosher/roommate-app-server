const Sequelize = require('sequelize');
const db = require('../config');

const Task = db.define('task', {
  text: Sequelize.STRING,
  type: Sequelize.STRING,
});

module.exports = Task;
