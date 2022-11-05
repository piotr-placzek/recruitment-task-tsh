'use strict';

module.exports = {
    PORT: +process.env.PORT || 3000,
    API_BASE: process.env.API_BASE || '/api',
    DB_FILE: process.env.DB_FILE || 'data/db.json',
};
