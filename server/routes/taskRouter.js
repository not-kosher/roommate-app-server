const router = require('express').Router();
const controller = require('../controllers/taskCtrl');

router.get('/:houseId', controller.getTasks);

router.post('/', controller.createTask);

router.delete('/:taskId', controller.deleteTask);

router.put('/', controller.editTask);

router.put('/:taskId', controller.claimTask);

module.exports = router;
