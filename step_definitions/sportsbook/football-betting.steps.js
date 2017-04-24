'use strict';

var driver = require('../../support/world.js').getDriver(),
    expect = require('chai').expect;

module.exports = function() {
    this.World = require('../../support/world.js').World;

    this.Given(/^I am on a football event page$/, function(next) {
        next();
    });

    this.When(/^I place a bet on an event$/, function(next) {
        next();
    });

    this.Then(/^my bet is shown in my open bets slip$/, function(next) {
        next();
    });
}