const router = require('express').Router();
const controller = require('../controllers/messageCtrl');

router.get('/:houseId', controller.getMessages);

module.exports = router;
