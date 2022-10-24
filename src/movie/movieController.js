'use strict';

const httpResponseStatus = require('../httpResponseStatus');
const movieObjectSchema = require('../validation/movieObjectSchema');
const validator = require('../validation/validator');
const movieService = require('./movieService');

async function addMovie(req, res, next) {
    try {
        const movie = validator.validate(req.body, movieObjectSchema);
        await movieService.addMovie(movie);
        res.status(httpResponseStatus.CREATED).send();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addMovie,
};
