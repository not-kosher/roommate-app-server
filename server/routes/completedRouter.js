const router = require('express').Router();
const controller = require('../controllers/completedCtrl');

router.get('/', controller.getCompleted);

router.post('/', controller.createCompleted);

router.delete('/', controller.deleteCompleted);

module.exports = router;
