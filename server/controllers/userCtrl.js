const User = require('../db/models/User');

module.exports = {
  getUser: (req, res) => {
    User.findOne({ where: { username: req.params.username } })
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  createUser: (req, res) => {
    User.create(req.body)
      .then(() => {
        res.send('Successfully created user');
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  deleteUser: (req, res) => {
  },

  editUser: (req, res) => {

  },

  joinHouse: (req, res) => {
    
  },

};
