'use strict';

const CONFIG = require('./config');
const express = require('express');
const logger = require('./service/loggerService');

async function main() {
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

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
