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

    this.registerHandler('BeforeStep', function(event, next) {
        setTimeout(function() {
            next();
        }, 1000);
    });
};

module.exports = Hooks;