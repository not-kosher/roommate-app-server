const router = require('express').Router();
const controller = require('../controllers/billCtrl')

router.get('/', controller.getBills);

router.post('/', controller.createBill);

router.delete('/', controller.deleteBill);

router.put('/', controller.editBill);

module.exports = router;
