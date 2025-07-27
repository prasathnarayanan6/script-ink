const express = require('express');
const {RegisterController} = require('../Controller/Login');
const registerRouter = express.Router();
registerRouter.post('/register', RegisterController);
module.exports = registerRouter;