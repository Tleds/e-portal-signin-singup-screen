require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.teste' : '.env',
});

require('dotenv').config();
const express = require('express');
const http = require('http');

const cors = require('cors');
const routes = require('./router');

class App {
  constructor() {
    this.server = express();
    this.http = http;
    this.middlewares();
    this.routes();
  }
  middlewares(){
    this.server.use(express.json());
    this.server.use(cors());
  }
  routes(){
    this.server.use(routes);
  }
}

module.exports = new App().server;