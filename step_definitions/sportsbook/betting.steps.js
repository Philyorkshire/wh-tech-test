'use strict';

var driver = require('../../support/world.js').getDriver(),
    expect = require('chai').expect;

var CONSTANTS = require('../../support/constants.js');

var sportsbookPage = require('../pages/sportsbook.page.js');
var sportsPage = require('../pages/common/sport.event.js');

var viewModel = {
    balance: 0.00,
    wager: 0.05
}

module.exports = function() {
    this.World = require('../../support/world.js').World;

    this.Given(/^I am on a (.*) event page$/, function(sport, next) {
        // Act
        sportsPage.open(sport);

        // Assert
        driver.getCurrentUrl().then(function(url) {
            expect(url).to.equal(CONSTANTS.HOME_ADDRESS + '/' + sport);
            next();
        });
    });

    this.When(/^I place a (.*) bet on a match$/, function(wager, next) {
        // Arrange
        sportsPage.getBalanceAmount().then(function(balanceText) {
            viewModel.balance = parseFloat(balanceText.replace('£', ''));
        });
        sportsPage.addSelectionToBetSlip();

        // Act
        setTimeout(function() {
            sportsPage.placeBet(wager);
            next();
        }, 1500);
    });

    this.Then(/^my balance is less than the (.*) amount$/, function(wager, next) {
        sportsbookPage.getBalanceAmount().then(function(balanceText) {
            var newBalance = parseFloat(balanceText.replace('£', ''));
            expect(newBalance).to.equal(viewModel.balance - wager);

            next();
        });
    });
}