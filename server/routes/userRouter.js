const router = require('express').Router();

router.post('/addUser');

router.put('/:id/updateProfile');

router.put('/:id/joinHouse');

router.delete('/:id');

module.exports = router;
