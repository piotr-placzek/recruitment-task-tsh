'use strict';

const httpResponseStatus = require('../httpResponseStatus');
const jsonDb = require('../db');
const movieObjectSchema = require('../validation/movieObjectSchema');
const validator = require('../validation/validator');

const MovieDao = require('./movieDao');

async function addMovieAction(req, res, next) {
    try {
        const movie = validator.validate(req.body, movieObjectSchema);
        const dao = new MovieDao(jsonDb);
        const result = await dao.addMovie(movie);
        res.status(httpResponseStatus.CREATED).send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = addMovieAction;
