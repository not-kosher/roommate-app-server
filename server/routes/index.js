const router = require('express').Router();

router.use('/users', require('./userRouter'));
router.use('/houses', require('./houseRouter'));
router.use('/notifications', require('./notificationRouter'));
router.use('/messages', require('./messageRouter'));
router.use('/roomies', require('./roomieRouter'));
router.use('/events', require('./eventRouter'));
router.use('/tasks', require('./taskRouter'));
router.use('/:houseId/completed', require('./completedRouter'));
router.use('/bills', require('./billRouter'));
router.use('/recurringBills', require('./recurringBillRouter'));
router.use('/charges', require('./chargeRouter'));

// send message to site in hopes they dont take it down
router.get('/', (req, res) => {
  res.send('We are useing this domain to run requests to our server through https. Please do not take this down.');
});

module.exports = router;
