const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

db.query('SELECT * FROM `bill`', { type: db.QueryTypes.SELECT })
  .then(users => console.log(`bills: ${users}`));

module.exports = {
  db,
};
