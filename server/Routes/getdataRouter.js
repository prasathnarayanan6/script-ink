const express = require('express');
const {getFormDatac} = require('../Controller/formc');
const getDataRouter = express.Router();
getDataRouter.get('/get-data', getFormDatac);
module.exports = getDataRouter;