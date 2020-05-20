const route = require('express').Router();

const { checkUserStore } = require('../src/middlewares/checkUserStore');

const users_controller = require('./controller/user_controller');
const session_users_controller = require('./controller/session_user_controller');

route.post('/users', checkUserStore, users_controller.store);
route.post('/session_users', session_users_controller.checkCredentials);

module.exports = route;