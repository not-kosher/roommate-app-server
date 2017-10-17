const router = require('express').Router();
const controller = require('../controllers/taskCtrl');

router.get('/', controller.getTasks);

router.post('/', controller.createTask);

router.delete('/', controller.deleteTask);

router.put('/', controller.editTask);

router.put('/:id', controller.claimTask);

module.exports = router;
