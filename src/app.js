const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(morgan('dev'));

server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.log('############ ERROR #############')
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;