/**
 * Created by Henry Huang on 12/22/16.
 */
'use strict'

module.exports = (req, res, next) => {
    console.log(req.body);
    // 1. copy zip file
    console.log('1. copy zip file');
    // 2. unzip file
    console.log('2. unzip file');
    // 3. run start script
    console.log('3. run start script');
    res.status = 200;
    res.send('ok');
}