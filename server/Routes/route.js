const express = require('express');
const {Login} = require('../Controller/Login');
const loginRouter = express.Router();
loginRouter.post('/associate-batch', Login);
module.exports = loginRouter;