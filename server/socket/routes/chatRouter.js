const chatCtrl = require('../controllers/chatCtrl.js');

const chatRouter = (io, client) => {
  client.on('addMessage', message => chatCtrl.addMessage(io, client, message));
};

module.exports = chatRouter;
