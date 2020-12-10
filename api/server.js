const express = require('express');
const helmet = require('helmet');

const recipesRouter = require('./recipes/recipe-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipesRouter);

module.exports = server;
