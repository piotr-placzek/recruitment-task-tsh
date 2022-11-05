'use strict';

const durationRangeFactory = require('../../src/factory/durationRangeFactory');

describe('duration range factory', () => {
    it('should produce min/max object for given duration', () => {
        const duration = 100;
        const range = durationRangeFactory(duration);

        expect(range.min).toBe(90);
        expect(range.max).toBe(110);
    });
});
