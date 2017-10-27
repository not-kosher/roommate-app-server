const router = require('express').Router();
const controller = require('../controllers/chargeCtrl');

router.get('/:houseId', controller.getCharges);

router.post('/', controller.createCharge);

router.delete('/:billId', controller.deleteChargesForBill);

router.delete('/paid/:chargeId', controller.markAsPaid);
module.exports = router;
