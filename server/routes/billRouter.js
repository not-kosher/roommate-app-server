const router = require('express').Router();
const controller = require('../controllers/billCtrl');

router.get('/:houseId', controller.getBills);

router.post('/', controller.createBill);

router.delete('/:billId', controller.deleteBill);

router.put('/:billId', controller.editBill);

module.exports = router;
