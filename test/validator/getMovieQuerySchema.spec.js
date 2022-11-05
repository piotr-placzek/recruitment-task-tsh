'use strict';

const schema = require('../../src/movie/schema/getMovieQuerySchema');
const { GET_MOVIE_VALID_QUERY, GET_MOVIE_INVALID_QUERY } = require('./mocks');

describe('Get movie query schema', () => {
    describe('should return an error for invalid query params', () => {
        for (const [key, params] of Object.entries(GET_MOVIE_INVALID_QUERY)) {
            it(`${key}`, () => {
                const { error } = schema.validate(params);
                expect(error).not.toBeUndefined();
            });
        }
    });

    describe('should not return an error for valid query params', () => {
        for (const [key, params] of Object.entries(GET_MOVIE_VALID_QUERY)) {
            it(`${key}`, () => {
                const { error } = schema.validate(params);
                expect(error).toBeUndefined();
            });
        }
    });
});
