'use strict';

const httpResponseStatus = require('../httpResponseStatus');
const movieObjectSchema = require('../validation/movieObjectSchema');
const validator = require('../validation/validator');
const movieService = require('./movieService');

function addMovie(req, res) {
    const movie = validator.validate(req.body, movieObjectSchema);
    movieService.addMovie(movie);
    res.status(httpResponseStatus.CREATED).send();
}

module.exports = {
    addMovie,
};
