const notificationCtrl = require('../controllers/notificationCtrl');

const notificationRouter = (io, client) => {
  client.on('addNotification', (notification) => {
    notificationCtrl.addNotification(io, client, notification);
  });
};

module.exports = notificationRouter;
