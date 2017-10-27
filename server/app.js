require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);

// MIDDLEWARE
app.use(bodyParser.json());

// ROUTES
app.use('/api', require('./routes'));

// SOCKET
const io = require('socket.io')(server);
const setupSocket = require('./socket');
setupSocket(io);

// DB
const setupDB = require('./db');
setupDB();

const PORT = process.env.SERVER_PORT;
server.listen(PORT, () => {
  console.log(`App now listening on port ${PORT}`);
});
