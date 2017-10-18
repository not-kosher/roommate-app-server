const Sequelize = require('sequelize');
const db = require('../config');

const ShameComment = db.define('comment', {
  text: Sequelize.STRING,
});

module.exports = ShameComment;
