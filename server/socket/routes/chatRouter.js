const chatCtrl = require('../controllers/chatCtrl.js');

const chatRouter = (io, client) => {
  client.on('addChatMessage', (houseId, messages) => {
    chatCtrl.addChatMessage(io, client, houseId, messages);
  });
};

module.exports = chatRouter;
