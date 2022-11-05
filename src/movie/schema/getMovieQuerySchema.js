'use strict';

const Joi = require('joi');
const genresSchema = require('./genresSchema');

const schema = Joi.object({
    duration: Joi.number().positive().optional(),
    genres: genresSchema.optional(),
});

module.exports = schema;
