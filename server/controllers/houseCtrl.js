const House = require('../db/models/House');
const User = require('../db/models/User');

module.exports = {
  getHouse: (req, res) => {

  },

  createHouse: (req, res) => {
    House.create({ name: req.body.name })
      .then((house) => {
        res.send(house);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  deleteHouse: (req, res) => {
  },

  editHouse: (req, res) => {

  },
};
