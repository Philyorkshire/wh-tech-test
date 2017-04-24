'use strict';

var driver = require('../../support/world.js').getDriver();
var CONSTANTS = require('../../support/constants.js');
var SportsPage = require('./common/sport.event.js');


class FootballEventPage extends SportsPage {

    open() {
        return driver.get(CONSTANTS.FOOTBALL.HOME);
    }
}

module.exports = new FootballEventPage();