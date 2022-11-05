'use strict';

const VALID_MOVIE_OBJECT = {
    title: 'Test movie',
    year: 2022,
    runtime: 100,
    director: 'Piotr P',
    actors: 'actors',
    plot: 'plot',
    posterUrl: 'url',
    genres: ['Comedy', 'Fantasy'],
};

const MOVIES_WITH_TO_LONG_STRINGS = {
    title: {
        title: Array(256).fill('X').join(),
        year: 2022,
        runtime: 100,
        director: 'Piotr P',
        actors: 'actors',
        plot: 'plot',
        posterUrl: 'url',
        genres: ['Comedy', 'Fantasy'],
    },
    director: {
        title: 'Test movie',
        year: 2022,
        runtime: 100,
        director: Array(256).fill('X').join(),
        actors: 'actors',
        plot: 'plot',
        posterUrl: 'url',
        genres: ['Comedy', 'Fantasy'],
    },
};

const MOVIES_WITH_MISSING_REQUIRED_FIELD = {
    title: {
        year: 2022,
        runtime: 100,
        director: 'Piotr P',
        actors: 'actors',
        plot: 'plot',
        posterUrl: 'url',
        genres: ['Comedy', 'Fantasy'],
    },
    year: {
        title: 'Test movie',
        runtime: 100,
        director: 'Piotr P',
        actors: 'actors',
        plot: 'plot',
        posterUrl: 'url',
        genres: ['Comedy', 'Fantasy'],
    },
    runtime: {
        title: 'Test movie',
        year: 2022,
        director: 'Piotr P',
        actors: 'actors',
        plot: 'plot',
        posterUrl: 'url',
        genres: ['Comedy', 'Fantasy'],
    },
    director: {
        title: 'Test movie',
        year: 2022,
        runtime: 100,
        actors: 'actors',
        plot: 'plot',
        posterUrl: 'url',
        genres: ['Comedy', 'Fantasy'],
    },
};

const MOVIES_WITH_WRONG_FIELD_TYPE = {
    title: {
        title: 300,
        year: 2022,
        runtime: 100,
        director: 'Piotr P',
        actors: 'actors',
        plot: 'plot',
        posterUrl: 'url',
        genres: ['Comedy', 'Fantasy'],
    },
    year: {
        title: 'Test movie',
        year: 'year',
        runtime: 100,
        director: 'Piotr P',
        actors: 'actors',
        plot: 'plot',
        posterUrl: 'url',
        genres: ['Comedy', 'Fantasy'],
    },
    runtime: {
        title: 'Test movie',
        year: 2022,
        runtime: 'runtime',
        director: 'Piotr P',
        actors: 'actors',
        plot: 'plot',
        posterUrl: 'url',
        genres: ['Comedy', 'Fantasy'],
    },
    director: {
        title: 'Test movie',
        year: 2022,
        runtime: 100,
        director: 10,
        actors: 'actors',
        plot: 'plot',
        posterUrl: 'url',
        genres: ['Comedy', 'Fantasy'],
    },
};

const MOVIES_WITH_INVALID_GENRES = {
    'empty array': {
        title: 'Test movie',
        year: 2022,
        runtime: 100,
        director: 'Piotr P',
        actors: 'actors',
        plot: 'plot',
        posterUrl: 'url',
        genres: [],
    },
    'nonexisting genres': {
        title: 'Test movie',
        year: 2022,
        runtime: 100,
        director: 'Piotr P',
        actors: 'actors',
        plot: 'plot',
        posterUrl: 'url',
        genres: ['Invalid genre'],
    },
};

const GET_MOVIE_VALID_QUERY = {
    GET_MOVIE_EMPTY_QUERY: {},

    GET_MOVIE_QUERY_WITH_VALID_DURATION: {
        duration: 100,
    },

    GET_MOVIE_QUERY_WITH_VALID_GENRES: {
        genres: ['Comedy', 'Crime'],
    },
};

const GET_MOVIE_INVALID_QUERY = {
    GET_MOVIE_QUERY_WITH_INVALID_DURATION_TYPE: {
        duration: true,
    },

    GET_MOVIE_QUERY_WITH_INVALID_DURATION_VALUE: {
        duration: -100,
    },

    GET_MOVIE_QUERY_WITH_EMPTY_GENRES: {
        genres: [],
    },

    GET_MOVIE_QUERY_WITH_INVALID_GENRES_TYPE: {
        genres: 'Comedy',
    },

    GET_MOVIE_QUERY_WITH_INVALID_GENRES_TYPES: {
        genres: [100, 100],
    },
};

module.exports = {
    VALID_MOVIE_OBJECT,
    MOVIES_WITH_TO_LONG_STRINGS,
    MOVIES_WITH_MISSING_REQUIRED_FIELD,
    MOVIES_WITH_WRONG_FIELD_TYPE,
    MOVIES_WITH_INVALID_GENRES,
    GET_MOVIE_VALID_QUERY,
    GET_MOVIE_INVALID_QUERY,
};
