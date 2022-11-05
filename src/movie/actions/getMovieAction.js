'use strict';

const httpResponseStatus = require('../../httpResponseStatus');
const jsonDb = require('../../db');
const getMovieQuerySchema = require('../schema/getMovieQuerySchema');
const validator = require('../../validation/validator');

const MovieDao = require('../movieDao');

async function getMovieAction(req, res, next) {
    try {
        const filters = validator.validate(req.query || {}, getMovieQuerySchema);
        const dao = new MovieDao(jsonDb);
        const result = await dao.getMovie(filters);
        res.status(httpResponseStatus.SUCCESS).send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = getMovieAction;
