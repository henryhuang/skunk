/**
 * Created by Henry Huang on 12/22/16.
 */
'use strict'
module.exports = (req, res, next) => {
    res.send('This is default processor, it means there is not any processors to handle your request!')
}