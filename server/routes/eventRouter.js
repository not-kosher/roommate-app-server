const router = require('express').Router();
const controller = require('../controllers/eventCtrl')

router.get('/', controller.getEvents);

router.post('/', controller.postEvent);

router.delete('/', controller.deleteEvent);

router.put('/', controller.editEvent);

module.exports = router;
