const express = require('express');
const {formc} = require('../Controller/formc');
const formRouter = express.Router();
formRouter.post('/form-check', formc);
module.exports = formRouter;