'use strict';

var driver = require('../../support/world.js').getDriver();
var CONSTANTS = require('../../support/constants.js');
var Page = require('./common/page.js');

class SportsbookHomePage extends Page {

    open() {
        return driver.get(CONSTANTS.HOME_ADDRESS);
    }
}

module.exports = new SportsbookHomePage();