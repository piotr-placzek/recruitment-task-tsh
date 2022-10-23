'use strict';

const controller = require('./movieController');
const express = require('express');
const router = express.Router();

router.put('/add', controller.addMovie);

module.exports = router;
