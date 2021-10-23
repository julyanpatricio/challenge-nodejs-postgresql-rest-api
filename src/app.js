const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const server = express();
const routes = require('./routes/index.js');

server.use(morgan('dev'));
server.use(express.json())
server.use(bodyparser.urlencoded({ extended: false }));

server.use('/', routes);

server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.log('############ ERROR #############')
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;