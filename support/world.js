'use strict';

var fs = require('fs'),
    webdriver = require('selenium-webdriver'),
    promise = require('selenium-webdriver').promise;

var driver = require('./driver').driver;

var getDriver = function() {
    return driver;
};

var getPromise = function() {
    return promise;
}

var World = function World(callback) {
    this.webdriver = webdriver;
    this.driver = driver;

    this.waitFor = function(cssLocator, timeout) {
        var waitTimeout = timeout || 10000;

        return driver.wait(function() {
            return driver.isElementPresent({css: cssLocator});
        }, waitTimeout);
    };
};

module.exports.World = World;
module.exports.getDriver = getDriver;
module.exports.getPromise = getPromise;