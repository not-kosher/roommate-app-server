const Sequelize = require('sequelize');
const db = require('../config');

const Message = db.define('message', {
  text: Sequelize.STRING,
});

module.exports = Message;
