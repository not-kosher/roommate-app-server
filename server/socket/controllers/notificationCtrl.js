const Notification = require('../../db/models/HouseNotification');

const addNotification = (io, client, houseId, userId, notification) => {
  io.to(houseId).emit('newNotification', notification);

  Notification.create({
    houseId,
    userId,
    text: notification.text,
    type: notification.type,
  })
    .then(newNotification => console.log(`Added new notification to db: ${newNotification}`))
    .catch(err => console.log(`FAILED to add message to db: ${err}`));
};

module.exports = {
  addNotification,
};
