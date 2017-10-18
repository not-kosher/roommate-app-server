const chatRouter = require('./routes/chatRouter.js');
const notificationRouter = require('./routes/notificationRouter.js');

const socketSetup = (io) => {
  io.on('connection', (client) => {
    chatRouter(io, client);
    notificationRouter(io, client);
  });
};

module.exports = socketSetup;
