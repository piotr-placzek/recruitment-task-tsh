'use strict';

const Joi = require('joi');
const ValidationError = require('../../src/validation/validationError');
const validator = require('../../src/validation/validator');

describe('Basic validator', () => {
    it('should throw validation error', () => {
        const object = {};
        const schema = Joi.object({
            id: Joi.number().required(),
            name: Joi.string(),
        });

        expect(() => {
            validator.validate(object, schema);
        }).toThrow(new ValidationError({ message: '"id" is required' }));
    });

    it('should return given object', () => {
        const object = {
            id: 1,
            name: 'One',
        };

        const schema = Joi.object({
            id: Joi.number().required(),
            name: Joi.string(),
        });

        const result = validator.validate(object, schema);

        expect(result).toEqual(object);
    });
});
