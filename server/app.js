require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);

app.use(bodyParser.json());

app.use('/api', require('./routes'));

const setupDB = require('./db');
setupDB();

const PORT = process.env.SERVER_PORT;
server.listen(PORT, () => {
  console.log(`App now listening on port ${PORT}`);
});
