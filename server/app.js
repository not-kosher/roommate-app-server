require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app); 

app.use(bodyParser.json());

const db = require('./db')

const PORT = process.env.SERVER_PORT;
server.listen(PORT, () => {
  console.log('App now listening on port ' + PORT);
}); 

