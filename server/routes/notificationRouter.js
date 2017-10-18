const router = require('express').Router();
const controller = require('../controllers/notificationCtrl');

router.get('/', controller.getNotifications);

router.post('/', controller.createNotification);

router.delete('/', controller.deleteNotification);

module.exports = router;
