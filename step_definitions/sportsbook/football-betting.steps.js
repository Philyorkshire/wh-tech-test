'use strict';

var driver = require('../../support/world.js').getDriver(),
    expect = require('chai').expect;

var CONSTANTS = require('../../support/constants.js');

module.exports = function() {
    this.World = require('../../support/world.js').World;

    var sportsbookPage = require('../pages/sportsbook.home.js');
    var footballEventsPage = require('../pages/football.events.js');
    
    this.Given(/^I am logged in$/, function(next) {
        sportsbookPage.open();
        sportsbookPage.login();

        driver.getCurrentUrl().then(function(url) {
            expect(url).to.equal(CONSTANTS.HOME_ADDRESS);
            next();
        });
    });

    this.Given(/^I am on a football event page$/, function(next) {
        footballEventsPage.open();

        driver.getCurrentUrl().then(function(url) {
            expect(url).to.equal(CONSTANTS.FOOTBALL.HOME);
            next();
        });
    });

    this.When(/^I place a bet on a match$/, function(next) {
        footballEventsPage.addSelectionToBetSlip()
            .then(function() {
                driver.wait(function() {
                    footballEventsPage.placeBet();
                }, 1000);
            })
            .then(function() {
                next();
            });
    });

    this.Then(/^my bet is shown in my open bets slip$/, function(next) {
        next();
    });
}