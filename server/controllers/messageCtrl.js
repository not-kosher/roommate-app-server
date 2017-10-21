const Message = require('../db/models/Message');

module.exports = {
  getMessages: (req, res) => {
    console.log(`houseId off params: ${req.params.houseId}`);
    Message.findAll({
      where: { houseId: req.params.houseId },
      order: [['createdAt', 'ASC']],
    })
      .then((messages) => {
        console.log(`got messages from db: ${messages}`);
        res.send(messages);
      })
      .catch(err => console.log(`FAILED to get messages from db: ${err}`));
  },

};
