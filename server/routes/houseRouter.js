const router = require('express').Router();
const controller = require('../controllers/houseCtrl');

router.get('/:houseId', controller.getHouse);

router.post('/', controller.createHouse);

router.delete('/:houseId', controller.deleteHouse);

router.put('/:houseId', controller.editHouse);

module.exports = router;
