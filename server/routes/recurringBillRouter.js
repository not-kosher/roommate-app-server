const router = require('express').Router();
const contoller = require('../controllers/recurringBillCtrl');

router.get('/:houseId', contoller.getRecurringBills);

router.post('/', contoller.createRecurringBill);

router.delete('/:billId', contoller.deleteRecurringBill);

router.put('/:billId', contoller.editRecurringBill);


module.exports = router;
