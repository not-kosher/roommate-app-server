const Sequelize = require('sequelize');
const db = require('../config');

const ShamePost = db.define('shamepost', {
  text: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
});

module.exports = ShamePost;
