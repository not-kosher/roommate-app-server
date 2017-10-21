const router = require('express').Router();
const controller = require('../controllers/messageCtrl');

router.get('/', controller.getMessages);

module.exports = router;
