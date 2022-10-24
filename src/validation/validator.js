'use strict';

const ValidationError = require('./validationError');

function validate(obj, schema) {
    const { error, value } = schema.validate(obj);
    if (error) {
        throw new ValidationError(error);
    }
    return value;
}

module.exports = { validate };
