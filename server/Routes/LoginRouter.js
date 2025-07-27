const express = require('express');
const {Login} = require('../Controller/Login');
const loginRouter = express.Router();
loginRouter.post('/login', Login);
module.exports = loginRouter;