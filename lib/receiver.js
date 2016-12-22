/**
 * Created by Henry Huang on 12/22/16.
 */
'use strict'

const FileStreamRotator = require('file-stream-rotator');
const express = require('express');
const fs = require('fs');
const app = express();
const morgan = require('morgan');
const path = require('path');
const logDirectory = path.join(__dirname, 'log');
const bodyParser = require('body-parser')

const router = require('./router')

const start = (host, port) => {

    app.use(bodyParser.json());

    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

    var accessLogStream = FileStreamRotator.getStream({
        date_format: 'YYYYMMDD',
        filename: path.join(logDirectory, 'access-%DATE%.log'),
        frequency: 'daily',
        verbose: false
    });

    app.use(morgan('combined', {stream: accessLogStream}));

    app.use('/', router);

    app.listen(port, host, () => {
        console.log('Skunk running...');
    })

};

module.exports.start = start;