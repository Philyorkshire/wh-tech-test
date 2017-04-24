'use strict';

var driver = require('./world.js').getDriver(),
    promise = require('./world.js').getPromise();

var CONSTANTS = require('./constants');

var Hooks = function() {
    this.registerHandler('BeforeFeatures', function(event, next) {
        driver.get(CONSTANTS.STARTUP_ADDRESS).then(function() {
            next();
        });
    });
};

module.exports = Hooks;