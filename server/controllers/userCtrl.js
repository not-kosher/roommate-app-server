const User = require('../db/models/User');

module.exports = {
  getUser: (req, res) => {
    User.findOne({ where: { username: req.params.username } })
      .then((user) => {
        console.log('Found user', user);
        res.send(user);
      })
      .catch((err) => {
        console.log('Error finding user', err);
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

  editUser: (req, res) => {
    User.update(req.body, { where: { id: req.params.id } })
      .then(() => {
        res.send('Successfully updated user');
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  
  deleteUser: (req, res) => {
  
  },

  joinHouse: (req, res) => {
    
  },

};
