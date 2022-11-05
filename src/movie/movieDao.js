'use strict';

const durationRangeFactory = require('../factory/durationRangeFactory');

const TABLE = '/movies';

class MovieDao {
    constructor(db) {
        this.db = db;
    }

    async addMovie(movie) {
        return this.db.insert(TABLE, movie);
    }

    async getMovie({ duration, genres }) {
        const durationRange = durationRangeFactory(duration);
    }
}

module.exports = MovieDao;
