const Notification = require('../db/models/HouseNotification');

module.exports = {
  getNotifications: (req, res) => {
    Notification.findAll({
      where: { houseId: req.params.houseId },
      order: [['createdAt', 'DESC']],
    })
      .then(notifications => res.send(notifications))
      .catch(err => console.log(`FAILED to get notifications: ${err}`));
  },

  createNotification: (req, res) => {
    Notification.create({
      type: req.body.type,
      text: req.body.text,
      houseId: req.params.houseId,
      userId: req.body.userId,
    })
      .then(notification => res.status(201).send(notification))
      .catch(err => console.log(`FAILED to create notification: ${err}`));
  },

  deleteNotification: (req, res) => {
    Notification.destroy({
      where: { id: req.body.id },
    })
      .then(numDestroyed => res.send(numDestroyed))
      .catch(err => console.log(`FAILED to delete notification: ${err}`));
  },
};
