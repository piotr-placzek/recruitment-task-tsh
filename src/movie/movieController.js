'use strict';

const logger = require('../service/loggerService');

function addMovie(req, res, next) {
    logger.info('addMovie');
}

module.exports = {
    addMovie,
};
