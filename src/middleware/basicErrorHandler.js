'use strict';

// eslint-disable-next-line no-unused-vars
function basicErrorHandler(error, req, res, next) {
    res.status(error.code).send(error.message);
}

module.exports = basicErrorHandler;
