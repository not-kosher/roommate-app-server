const router = require('express').Router();
const controller = require('../controllers/userCtrl');

router.get('/:id', controller.getUser);

router.post('/addUser', controller.createUser);

router.put('/:id/updateProfile', controller.editUser);

router.put('/:id/joinHouse', controller.joinHouse);

router.delete('/:id', controller.deleteUser);

module.exports = router;
