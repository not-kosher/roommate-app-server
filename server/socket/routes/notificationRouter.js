const notificationCtrl = require('../controllers/notificationCtrl');

const notificationRouter = (io, client) => {
  client.on('addNotification', (houseId, userId, notification) => {
    notificationCtrl.addNotification(io, client, houseId, userId, notification);
  });
};

module.exports = notificationRouter;
