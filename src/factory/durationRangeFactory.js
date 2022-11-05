'use strict';

function durationRangeFactory(targetDuration) {
    return {
        min: targetDuration - 10,
        max: targetDuration + 10,
    };
}

module.exports = durationRangeFactory;
