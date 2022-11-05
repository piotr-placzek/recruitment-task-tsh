'use strict';

const durationRangeFactory = require('../factory/durationRangeFactory');
const { countDuplicates } = require('../utils/duplicates');

const TABLE = '/movies';

class MovieDao {
    constructor(db) {
        this.db = db;
    }

    async addMovie(movie) {
        return this.db.insert(TABLE, movie);
    }

    async getMovie({ duration, genres }) {
        let movies = await this.db.getAll(TABLE);

        if (genres) {
            movies = movies.filer(this.genresFilter(genres));
        }

        if (duration) {
            movies = movies.filer(this.durationRangeFilter(durationRangeFactory(duration)));
        } else {
            return this.randomMovie(movies);
        }

        return movies.sort(this.genresSorter(genres));
    }

    genresFilter(genres) {
        return (movie) => movie.genres.some((genre) => genres.includes(genre));
    }

    genresSorter(genres) {
        return (movieA, movieB) => {
            const genresA = Array(...movieA.genres);
            genresA.push(...genres);
            const genresB = Array(...movieB.genres);
            genresB.push(...genres);
            return countDuplicates(genresB) - countDuplicates(genresA);
        };
    }

    durationRangeFilter(range) {
        return (movie) => movie.runtime >= range.min && movie.runtime <= range.max;
    }

    randomMovie(movies) {
        return movies.at(Math.floor(Math.random() * (movies.length - 1)));
    }
}

module.exports = MovieDao;
