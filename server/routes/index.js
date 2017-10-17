const router = require('express').Router();

router.use('/users', require('./userRouter'));
router.use('/houses', require('./houseRouter'));
router.use('/notifications', require('./notificationRouter'));
router.use('/roomie', require('./roomieRouter'));
router.use('/:houseId/tasks', require('./taskRouter'));
router.use('/:houseId/completed', require('./completedRouter'));
router.use('/:houseId/financials', require('./financialRouter'));

module.exports = router;
