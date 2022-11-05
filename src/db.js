'use strict';

const { JsonDB, Config } = require('node-json-db');
const { DB_FILE } = require('./config');

const db = new JsonDB(new Config(DB_FILE, true, true, '/', true));

async function getAll(tableName) {
    return db.getData(tableName);
}

async function insert(tableName, object) {
    const table = await getAll(tableName);
    object.id = generateNewId(table);
    table.push(object);
    await db.push(tableName, table);
    return object;
}

function generateNewId(array) {
    return Math.max(...array.map((e) => e.id)) + 1;
}

module.exports = {
    getAll,
    insert,
};
