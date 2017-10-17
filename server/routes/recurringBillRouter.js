const router = require('express').Router();
const contoller = require('../controllers/recurringBillCtrl');

router.get('/', contoller.getRecurringBills);

router.post('/', contoller.createRecurringBill);

router.delete('/', contoller.deleteRecurringBill);

router.put('/', contoller.editRecurringBill);


module.exports = router;
