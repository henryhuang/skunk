/**
 * Created by Henry Huang on 12/22/16.
 */
'use strict'
const receiver = require('./receiver')
const config = require('./config.json')

console.log(JSON.stringify(config));
receiver.start(config.server.host, config.server.port);