'use strict';

const CONFIG = require('./config');
const express = require('express');
const logger = require('./service/loggerService');
const routing = require('./routing');

async function main() {
    const app = express();

    app.use(CONFIG.API_BASE, routing);

    app.listen(CONFIG.PORT, () => {
        logger.info('Ready');
    });
}

function exit() {
    logger.info('Exit');
    process.exit(0);
}

process.on('SIGINT', exit);
process.on('SIGKILL', exit);
process.on('SIGTERM', exit);

main();
