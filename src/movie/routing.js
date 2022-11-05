'use strict';

const express = require('express');
const router = express.Router();

const addMovieAction = require('./actions/addMovieAction');

router.put('/add', addMovieAction);

module.exports = router;
