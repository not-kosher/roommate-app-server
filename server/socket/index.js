const houseRouter = require('./routes/houseRouter.js');
const chatRouter = require('./routes/chatRouter.js');
const notificationRouter = require('./routes/notificationRouter.js');

const socketSetup = (io) => {
  io.on('connection', (client) => {
    houseRouter(io, client);
    chatRouter(io, client);
    notificationRouter(io, client);
  });
};

module.exports = socketSetup;
