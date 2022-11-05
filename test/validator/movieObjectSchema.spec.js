'use strict';

const schema = require('../../src/movie/schema/movieObjectSchema');
const {
    MOVIES_WITH_MISSING_REQUIRED_FIELD,
    MOVIES_WITH_WRONG_FIELD_TYPE,
    MOVIES_WITH_INVALID_GENRES,
    VALID_MOVIE_OBJECT,
    MOVIES_WITH_TO_LONG_STRINGS,
} = require('./mocks');

describe('Movie object schema', () => {
    describe('should return an error for object with missing required field', () => {
        for (const [key, movie] of Object.entries(MOVIES_WITH_MISSING_REQUIRED_FIELD)) {
            it(`${key}`, () => {
                const { error } = schema.validate(movie);
                expect(error).not.toBeUndefined();
            });
        }
    });

    describe('should return an error for object with invalid type of field', () => {
        for (const [key, movie] of Object.entries(MOVIES_WITH_WRONG_FIELD_TYPE)) {
            it(`${key}`, () => {
                const { error } = schema.validate(movie);
                expect(error).not.toBeUndefined();
            });
        }
    });

    describe('should return an error for object with invalid array of genres', () => {
        for (const [key, movie] of Object.entries(MOVIES_WITH_INVALID_GENRES)) {
            it(`${key}`, () => {
                const { error } = schema.validate(movie);
                expect(error).not.toBeUndefined();
            });
        }
    });

    describe('should return an error for object with to long strings', () => {
        for (const [key, movie] of Object.entries(MOVIES_WITH_TO_LONG_STRINGS)) {
            it(`${key}`, () => {
                const { error } = schema.validate(movie);
                expect(error).not.toBeUndefined();
            });
        }
    });

    describe('should not return en error for', () => {
        it('valid movie object', () => {
            const { error } = schema.validate(VALID_MOVIE_OBJECT);
            expect(error).toBeUndefined();
        });
    });
});
