'use strict';

const express = require('express');
const router = express.Router();
const movieRouter = require('./movie/routing');

router.use('/movie', movieRouter);

module.exports = router;
