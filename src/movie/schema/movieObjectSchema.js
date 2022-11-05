'use strict';

const Joi = require('joi');
const genresSchema = require('./genresSchema');

const schema = Joi.object({
    title: Joi.string().max(255).required(),
    year: Joi.number().required(),
    runtime: Joi.number().required(),
    director: Joi.string().max(255).required(),
    actors: Joi.string().optional(),
    plot: Joi.string().optional(),
    posterUrl: Joi.string().optional(),
    genres: genresSchema.required(),
});

module.exports = schema;
