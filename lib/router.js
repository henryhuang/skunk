/**
 * Created by Henry Huang on 12/22/16.
 */
'use strict'

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const config = require('./../config.json');

let processors = config.processors;

// extensions
const configExt = require('./../extends/config.json');
if (configExt && configExt.processors) {
    processors = processors.concat(configExt.processors)
}

console.log(processors)

processors.forEach((ele) => {

    // all methods are post
    router.post(ele.path, (req, res, next) => {

        let procPath = path.join(__dirname, 'processors', ele.processor + '.js');
        if (!fs.existsSync(procPath)) {
            procPath = path.join(__dirname, '../extends', ele.processor + '.js');
        }
        if (fs.existsSync(procPath)) {
            let processor = require(procPath);
            processor.call(this, req, res, next);
        } else {
            // default processor
            require('./processors/default.processor.js').call(this, req, res, next);
        }

    })

});

router.get('/', (req, res, next) => {
    res.send('This is Skunk!')
})

module.exports = router
