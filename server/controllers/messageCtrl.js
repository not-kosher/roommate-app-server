const Message = require('../db/models/Message');

module.exports = {
  getMessages: (req, res) => {
    Message.findAll({
      where: { houseId: req.params.houseId },
      order: [['createdAt', 'ASC']],
    })
      .then(messages => res.send(messages))
      .catch(err => console.log(`FAILED to get messages from db: ${err}`));
  },

};
