const router = require('express').Router();
const controller = require('../controllers/chargeCtrl');

router.get('/', controller.getCharges);

router.post('/', controller.postCharge);

router.delete('/', controller.deleteCharge);

module.exports = router;
