const router = require('express').Router();

// TO USE PARAMS, MUST PUT THEM AT THE ROUTER LEVEL

router.use('/users', require('./userRouter'));
router.use('/houses', require('./houseRouter'));
router.use('/notifications', require('./notificationRouter'));
router.use('/messages', require('./messageRouter'));
router.use('/roomies', require('./roomieRouter'));
router.use('/events', require('./eventRouter'));
router.use('/:houseId/tasks', require('./taskRouter'));
router.use('/:houseId/completed', require('./completedRouter'));
router.use('/bills', require('./billRouter'));
router.use('/recurringBills', require('./recurringBillRouter'));
router.use('/charges', require('./chargeRouter'));

module.exports = router;
