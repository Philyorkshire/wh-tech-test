'use strict';

var driver = require('./world.js').getDriver(),
    promise = require('./world.js').getPromise();

var CONSTANTS = require('./constants');

var Hooks = function() {

    this.registerHandler('BeforeFeatures', function(event, next) {
        var openHomePage = () => driver.get(CONSTANTS.STARTUP_ADDRESS);
        var openLoginModal = () => driver.findElement({css: '#accountTabButton .icon-expanded'}).click();
        var enterUsername = () => driver.findElement({css: '#loginUsernameInput'}).sendKeys(CONSTANTS.credentials.username);
        var enterPassword = () => driver.findElement({css: '#loginPasswordInput'}).sendKeys(CONSTANTS.credentials.password);
        var submit = () => driver.findElement({css: '#loginButton'}).click();

        return Promise.all([
            openHomePage(),
            openLoginModal(),
            enterUsername(),
            enterPassword(),
            submit(),
            next()
        ]);
    });

    this.registerHandler('BeforeStep', function(event, next) {
        setTimeout(function() {
            next();
        }, 1000);
    });
};

module.exports = Hooks;