const seedData = require('./seeding/house');
const db = require('./config/index');

const House = require('./models/House');
const User = require('./models/User');
const HouseNotification = require('./models/HouseNotification');
const Message = require('./models/Message');
const ShamePost = require('./models/ShamePost');
const ShameComment = require('./models/ShameComment');
const CalendarEvent = require('./models/CalendarEvent');
const Task = require('./models/Task');
const HouseHistory = require('./models/HouseHistory');
const RecurringBill = require('./models/RecurringBill');
const Bill = require('./models/Bill');
const Charge = require('./models/Charge');

const setupDB = () => {
  // define realtionships for users
  User.belongsTo(House);
  House.hasMany(User);

  // define realtionships for notifications
  HouseNotification.belongsTo(House);
  House.hasMany(HouseNotification);
  HouseNotification.belongsTo(User);
  User.hasMany(HouseNotification);

  // define realtionships for messages
  Message.belongsTo(House);
  House.hasMany(Message);
  Message.belongsTo(User);
  User.hasMany(Message);

  // define realtionships for shamepost
  ShamePost.belongsTo(House);
  House.hasMany(ShamePost);
  ShamePost.belongsTo(User);
  User.hasMany(ShamePost);

  // define realtionships for shamecomment
  ShameComment.belongsTo(House);
  House.hasMany(ShameComment);
  ShameComment.belongsTo(User);
  User.hasMany(ShameComment);
  ShameComment.belongsTo(ShamePost);
  ShamePost.hasMany(ShameComment);

  // define realtionships for calendarevents
  CalendarEvent.belongsTo(House);
  House.hasMany(CalendarEvent);
  CalendarEvent.belongsTo(User);
  User.hasMany(CalendarEvent);

  // define realtionships for tasks
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

  // define realtionships for househistory
  HouseHistory.belongsTo(House);
  House.hasMany(HouseHistory);
  HouseHistory.belongsTo(User);
  User.hasMany(HouseHistory);

  // define realtionships for recurringbill
  RecurringBill.belongsTo(House);
  House.hasMany(RecurringBill);
  RecurringBill.belongsTo(User);
  User.hasMany(RecurringBill);

  // define realtionships for bill
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

  // define realtionships for charge
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


  const seed = (table) => {
    seedData.forEach((data) => {
      table.create(data)
        .then(() => console.log('data successfully seeded'))
        .catch(err => console.log('error seding data', err));
    });
  };

  seed(House);
};

module.exports = setupDB;
