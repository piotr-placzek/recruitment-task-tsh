'use strict';

const Joi = require('joi');

const schema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().max(255).required(),
    year: Joi.number().required(),
    runtime: Joi.number().required(),
    director: Joi.string().max(255).required(),
    actors: Joi.string().optional(),
    plot: Joi.string().optional(),
    posterUrl: Joi.string().optional(),
    generes: Joi.array()
        .min(1)
        .items(
            Joi.string().valid(
                'Comedy',
                'Fantasy',
                'Crime',
                'Drama',
                'Music',
                'Adventure',
                'History',
                'Thriller',
                'Animation',
                'Family',
                'Mystery',
                'Biography',
                'Action',
                'Film-Noir',
                'Romance',
                'Sci-Fi',
                'War',
                'Western',
                'Horror',
                'Musical',
                'Sport',
            ),
        )
        .required(),
});

module.exports = schema;
