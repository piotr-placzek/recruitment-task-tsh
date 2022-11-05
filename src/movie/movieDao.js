'use strict';

const TABLE = '/movies';

class MovieDao {
    constructor(db) {
        this.db = db;
    }

    async addMovie(movie) {
        return this.db.insert(TABLE, movie);
    }
}

module.exports = MovieDao;
