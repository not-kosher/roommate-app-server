const router = require('express').Router();
const controller = require('../controllers/chargeCtrl');

router.get('/', controller.getCharges);

router.post('/', controller.createCharge);

router.delete('/', controller.deleteCharge);

module.exports = router;
