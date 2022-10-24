'use strict';

const jsonDb = require('../db');
const MovieDao = require('./movieDao');

async function addMovie(movie) {
    const dao = new MovieDao(jsonDb);
    return dao.addMovie(movie);
}

module.exports = {
    addMovie,
};
