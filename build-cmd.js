'use strict';

const fsp = require('fs-promise');

const build = require('./build');

fsp.readFile(process.argv.length === 3 ? process.argv[2] : './config.json').catch(err => {
    console.error(err);
    process.exit(1);
}).then(data => {
    const config = JSON.parse(data.toString());

    return build(config);
}).catch(err => {
    console.error(err);
});