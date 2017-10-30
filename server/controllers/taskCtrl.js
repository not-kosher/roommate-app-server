const Task = require('../db/models/Task')

module.exports = {
  getTasks: (req, res) => {
    Task.findAll({ where: { houseId: parseInt(req.params.houseId) } })
      .then(tasks => res.send(tasks))
      .catch(err => res.status(500).send(err));
  },

  createTask: (req, res) => {
    Task.findOrCreate({ where: req.body })
      .then(task => res.send(task))
      .catch(err => res.status(500).send(err));
  },

  deleteTask: (req, res) => {
    Task.findOne({ where: { id: parseInt(req.params.taskId) } })
    .then((task) => {
      if (task) {
        task.destroy();
      }
      res.status(200).send(task);
    })
    .catch(err => res.status(500).send(err));
  },

  editTask: (req, res) => {

  },

  claimTask: (req, res) => {

  },

};
