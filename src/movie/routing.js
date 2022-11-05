'use strict';

const express = require('express');
const router = express.Router();

const getMovieAction = require('./actions/getMovieAction');
const addMovieAction = require('./actions/addMovieAction');
const genresRequestQueryParamToObject = require('../middleware/genresRequestQueryParamToObject');

router.use(genresRequestQueryParamToObject);
router.get('/', getMovieAction);
router.put('/add', addMovieAction);

module.exports = router;
