const Notification = require('../../db/models/HouseNotification');

const addNotification = (io, client, notification) => {
  Notification.create(notification)
    .then((newNotification) => {
      console.log(`Added new notification to db: ${newNotification}`);
      io.to(newNotification.houseId).emit('newNotification', newNotification);
    })
    .catch(err => console.log(`FAILED to add message to db: ${err}`));
};

module.exports = {
  addNotification,
};
