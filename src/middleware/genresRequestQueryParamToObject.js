'use strict';

function genresRequestQueryParamToObject(req, res, next) {
    if (req.query.genres) {
        req.query.genres = req.query.genres.split(',');
    }
    next();
}

module.exports = genresRequestQueryParamToObject;
