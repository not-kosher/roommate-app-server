const router = require('express').Router();
const controller = require('../controllers/roomieCtrl');

router.get('/:houseId', controller.getRoomies);

// router.post('/', controller.addRoomie);

router.put('/:userId', controller.deleteRoomie);

module.exports = router;
