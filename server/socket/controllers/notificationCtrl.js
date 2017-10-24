const Notification = require('../../db/models/HouseNotification');

const addNotification = (io, client, notification) => {
  io.to(notification.houseId).emit('newNotification', notification);

  Notification.create(notification)
    .then(newNotification => console.log(`Added new notification to db: ${newNotification}`))
    .catch(err => console.log(`FAILED to add message to db: ${err}`));
};

module.exports = {
  addNotification,
};
