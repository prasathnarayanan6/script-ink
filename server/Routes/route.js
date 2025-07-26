const express = require('express');
const {Login} = require('../Controller/Login');
const loginRouter = express.Router();
loginRouter.get('/login', Login);
module.exports = loginRouter;