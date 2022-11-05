'use strict';

const Joi = require('joi');

const schema = Joi.array()
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
    );

module.exports = schema;
