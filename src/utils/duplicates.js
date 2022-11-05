'use strict';

function countOccurrenceOfEachElement(array) {
    const occurrences = {};
    array.forEach((e) => {
        occurrences[e] = (occurrences[e] || 0) + 1;
    });
    return occurrences;
}

function countDuplicates(array) {
    return Object.values(countOccurrenceOfEachElement(array)).reduce((acc, curr) => {
        if (curr > 1) {
            acc++;
        }
        return acc;
    }, 0);
}

module.exports = {
    countOccurrenceOfEachElement,
    countDuplicates,
};
