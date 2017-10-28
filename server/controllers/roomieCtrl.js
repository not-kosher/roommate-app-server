const User = require('../db/models/User.js');

module.exports = {
  getRoomies: (req, res) => {
    User.findAll({ where: { houseId: parseInt(req.params.houseId) } })
      .then(roomies => res.send(roomies))
      .catch(err => res.status(500).send(err));
  },

  // addRoomie: (req, res) => {

  // },

  deleteRoomie: (req, res) => {
    User.findOne({ where: { userId: parseInt(req.params.userId) } })
      .then((user) => {
        if (user) {
          user.updateAttributes({
            houseId: null,
          });
        }
        res.status(200);
      })
      .catch(err => res.status(500).send(err));
  },

};
