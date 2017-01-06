/**
 * Created by Henry Huang on 12/22/16.
 */
'use strict'
const server = require('./lib/server');
const config = require('./config.json');
const prettyjson = require('prettyjson');
const path = require('path');

config.log_dir = path.join(__dirname, 'log');

server.start(config);