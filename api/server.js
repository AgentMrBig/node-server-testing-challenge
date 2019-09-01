const express = require('express');

const Hobbits = require('../hobbits/hobbitsRouter.js');

const server = express();

server.use(express.json());

server.use('/api/hobbits', Hobbits);

module.exports = server;