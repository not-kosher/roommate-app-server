const router = require('express').Router();
const controller = require('../controllers/notificationCtrl');

router.get('/:houseId', controller.getNotifications);

router.post('/:houseId', controller.createNotification);

router.delete('/:houseId', controller.deleteNotification);

module.exports = router;
