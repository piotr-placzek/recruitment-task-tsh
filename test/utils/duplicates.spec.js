'use strict';

const { countOccurrenceOfEachElement, countDuplicates } = require('../../src/utils/duplicates');

describe('utils/duplicates', () => {
    const givenArray = ['a', 'a', 'a', 'b', 'c', 'c'];

    it('should return object with occurrence of each item of given array', () => {
        const result = countOccurrenceOfEachElement(givenArray);
        expect(result).toMatchInlineSnapshot(
            `
            Object {
              "a": 3,
              "b": 1,
              "c": 2,
            }
        `,
        );
    });

    it('should return value `2` for given array', () => {
        const result = countDuplicates(givenArray);
        expect(result).toBe(2);
    });
});
