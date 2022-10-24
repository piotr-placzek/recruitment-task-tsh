'use strict';

const httpResponseStatus = require('../httpResponseStatus');

class ValidationError {
    constructor(message) {
        this.message = message;
        this.code = httpResponseStatus.VALIDATION_ERROR;
    }
}

module.exports = ValidationError;
