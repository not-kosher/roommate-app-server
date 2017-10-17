const router = require('express').Router();

router.use('/users', require('./userRouter'));
router.use('/houses', require('./houseRouter'));
router.use('/notifications', require('./notificationRouter'));
router.use('/roomies', require('./roomieRouter'));
router.use('/events', require('./eventRouter'));
router.use('/:houseId/tasks', require('./taskRouter'));
router.use('/:houseId/completed', require('./completedRouter'));
router.use('/:houseId/bills', require('./billRouter'));
router.use('/:houseId/recurringBills', require('./recurringBillRouter'));
router.use('/:houseId/charges', require('./chargeRouter'));

module.exports = router;
