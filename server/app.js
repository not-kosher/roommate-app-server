require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);

// MIDDLEWARE
app.use(bodyParser.json());

// ROUTES
app.use('/api', require('./routes'));

// send message to site in hopes they dont take it down
app.get('/', (req, res) => {
  res.send('We are useing this domain to run requests to our server through https. Please do not take this down.');
});

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
