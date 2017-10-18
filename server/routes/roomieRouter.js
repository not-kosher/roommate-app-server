const router = require('express').Router();
const controller = require('../controllers/roomieCtrl');

router.get('/', controller.getRoomies);

router.post('/', controller.addRoomie);

router.delete('/', controller.deleteRoomie);

module.exports = router;
