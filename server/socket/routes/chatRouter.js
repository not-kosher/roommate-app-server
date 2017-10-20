const chatCtrl = require('../controllers/chatCtrl.js');

const chatRouter = (io, client) => {
  client.on('addMessage', (houseId, messages) => {
    chatCtrl.addMessage(io, client, messages);
  });
};

module.exports = chatRouter;
