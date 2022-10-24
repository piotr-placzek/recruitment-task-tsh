'use strict';

const ValidationError = require('../validation/validationError');

async function addMovie() {
    return Promise.reject(new ValidationError('asd'));
}

module.exports = {
    addMovie,
};
