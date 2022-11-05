'use strict';

const MovieDao = require('../../src/movie/movieDao');

describe('movie dao', () => {
    const dao = new MovieDao({});

    it('duration range filter', () => {
        const durationRange = { min: 90, max: 110 };
        const movies = [{ runtime: 50 }, { runtime: 90 }, { runtime: 100 }, { runtime: 110 }, { runtime: 150 }];

        const result = movies.filter(dao.durationRangeFilter(durationRange));

        expect(result.length).toBe(3);
        expect(result).toMatchInlineSnapshot(`
            Array [
              Object {
                "runtime": 90,
              },
              Object {
                "runtime": 100,
              },
              Object {
                "runtime": 110,
              },
            ]
        `);
    });

    it('genres filter', () => {
        const genres = ['Comedy', 'Crime', 'Fantasy'];
        const movies = [
            { genres: ['Comedy', 'Crime', 'Fantasy'] },
            { genres: ['Comedy', 'Crime'] },
            { genres: ['Comedy'] },
            { genres: ['SF', 'Comedy', 'Crime'] },
            { genres: ['SF', 'Crime'] },
            { genres: ['SF'] },
        ];

        const result = movies.filter(dao.genresFilter(genres));

        expect(result.length).toBe(5);
        expect(result).toMatchInlineSnapshot(`
            Array [
              Object {
                "genres": Array [
                  "Comedy",
                  "Crime",
                  "Fantasy",
                ],
              },
              Object {
                "genres": Array [
                  "Comedy",
                  "Crime",
                ],
              },
              Object {
                "genres": Array [
                  "Comedy",
                ],
              },
              Object {
                "genres": Array [
                  "SF",
                  "Comedy",
                  "Crime",
                ],
              },
              Object {
                "genres": Array [
                  "SF",
                  "Crime",
                ],
              },
            ]
        `);
    });

    it('genres sorter', () => {
        const genres = ['Comedy', 'Crime', 'Fantasy'];
        const movies = [
            { genres: ['SF', 'Crime'] },
            { genres: ['Comedy', 'Crime'] },
            { genres: ['Comedy'] },
            { genres: ['SF', 'Comedy', 'Crime'] },
            { genres: ['Comedy', 'Crime', 'Fantasy'] },
        ];

        const result = movies.sort(dao.genresSorter(genres));

        expect(result).toMatchInlineSnapshot(`
            Array [
              Object {
                "genres": Array [
                  "Comedy",
                  "Crime",
                  "Fantasy",
                ],
              },
              Object {
                "genres": Array [
                  "Comedy",
                  "Crime",
                ],
              },
              Object {
                "genres": Array [
                  "SF",
                  "Comedy",
                  "Crime",
                ],
              },
              Object {
                "genres": Array [
                  "SF",
                  "Crime",
                ],
              },
              Object {
                "genres": Array [
                  "Comedy",
                ],
              },
            ]
        `);
    });
});
