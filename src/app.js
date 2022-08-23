const express = require('express');
const { itWorks } = require('./middleware/middleware');
const routs = express.Router();


routs.get('/',(req, res, next) => itWorks(req, res, next));






module.exports = routs