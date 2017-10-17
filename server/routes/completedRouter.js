const router = require('express').Router();
const controller = require('../controllers/completedCtrl');

router.get('/', controller.getCompleted);

router.post('/', controller.postCompleted);

router.delete('/', controller.deleteCompleted);

module.exports = router;
