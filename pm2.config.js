/**
 * Created by Henry Huang on 1/6/17.
 */
'use strict';

module.exports = {
    apps: [{
        name: "skunk",
        script: "./index.js",
        instances: 2,
        exec_mode: "cluster",
        env: {
            "NODE_ENV": "local"
        }
    }]
}