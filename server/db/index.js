const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});


const House = db.define('house', {
  name: Sequelize.STRING,
  key: Sequelize.STRING,
});

const User = db.define('user', {
  username: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.INTEGER,
});

const HouseNotification = db.define('housenotification', {
  type: Sequelize.STRING,
  text: Sequelize.STRING,
});

const Message = db.define('message', {
  text: Sequelize.STRING,
});

const ShamePost = db.define('shamepost', {
  text: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
});

const ShameComment = db.define('comment', {
  text: Sequelize.STRING,
});

const CalendarEvent = db.define('calendarevent', {
  text: Sequelize.STRING,
  startDate: Sequelize.DATE,
  endDate: Sequelize.DATE,
  type: Sequelize.STRING,
});

const Task = db.define('task', {
  text: Sequelize.STRING,
  type: Sequelize.STRING,
});

const HouseHistory = db.define('househistory', {
  text: Sequelize.STRING,
  type: Sequelize.STRING,
});

const RecurringBill = db.define('recurringbill', {
  text: Sequelize.STRING,
  total: Sequelize.INTEGER,
  dueDate: Sequelize.DATE,
});

const Bill = db.define('bill', {
  text: Sequelize.STRING,
  total: Sequelize.INTEGER,
  dueDate: Sequelize.DATE,
});

const Charge = db.define('charge', {
  total: Sequelize.INTEGER,
});

User.belongsTo(House);
House.hasMany(User);

HouseNotification.belongsTo(House);
House.hasMany(HouseNotification);
HouseNotification.belongsTo(User);
User.hasMany(HouseNotification);

Message.belongsTo(House);
House.hasMany(Message);
Message.belongsTo(User);
User.hasMany(Message);

ShamePost.belongsTo(House);
House.hasMany(ShamePost);
ShamePost.belongsTo(User);
User.hasMany(ShamePost);

ShameComment.belongsTo(House);
House.hasMany(ShameComment);
ShameComment.belongsTo(User);
User.hasMany(ShameComment);
ShameComment.belongsTo(ShamePost);
ShamePost.hasMany(ShameComment);

CalendarEvent.belongsTo(House);
House.hasMany(CalendarEvent);
CalendarEvent.belongsTo(User);
User.hasMany(CalendarEvent);

Task.belongsTo(House);
House.hasMany(Task);
Task.belongsTo(User, {
  as: 'taskposterId',
  foreignKey: 'posterId',
});
Task.belongsTo(User, {
  as: 'taskclaimerId',
  foreignKey: 'claimerId',
});
User.hasMany(Task);

HouseHistory.belongsTo(House);
House.hasMany(HouseHistory);
HouseHistory.belongsTo(User);
User.hasMany(HouseHistory);

RecurringBill.belongsTo(House);
House.hasMany(RecurringBill);
RecurringBill.belongsTo(User);
User.hasMany(RecurringBill);

Bill.belongsTo(House);
House.hasMany(Bill);
Bill.belongsTo(User, {
  as: 'billposterId',
  foreignKey: 'posterId',
});
Bill.belongsTo(User, {
  as: 'billclaimerId',
  foreignKey: 'claimerId',
});
User.hasMany(Bill);
Bill.belongsTo(RecurringBill);
RecurringBill.hasMany(Bill);


Charge.belongsTo(User, {
  as: 'chargelenderId',
  foreignKey: 'lenderId',
});
Charge.belongsTo(User, {
  as: 'chargedebtorId',
  foreignKey: 'debtorId',
});
User.hasMany(Charge);
Charge.belongsTo(Bill);
Bill.hasMany(Charge);

db.authenticate()
  .then(() => console.log('your database is A1'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('you sunk my database!'))
  .catch(err => console.log(err));

db.query('show tables')
  .then(tables => console.log(tables));

module.exports = {
  db,
};
