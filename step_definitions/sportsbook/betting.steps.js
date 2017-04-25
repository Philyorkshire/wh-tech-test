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
    
    this.Given(/^I am logged in$/, function(next) {
        // Arrange
        sportsbookPage.open();
        sportsbookPage.login(viewModel.username, viewModel.password);

        // Assert
        driver.getCurrentUrl().then(function(url) {
            expect(url).to.equal(CONSTANTS.HOME_ADDRESS);
            next();
        });
    });

    this.Given(/^I am on a (.*) event page$/, function(sport, next) {
        // Act
        sportsPage.open(sport);
        sportsPage.getBalanceAmount().then(function(balanceText) {
            viewModel.balance = parseInt(balanceText.replace('£', ''));
        });

        // Assert
        driver.getCurrentUrl().then(function(url) {
            expect(url).to.equal(CONSTANTS.HOME_ADDRESS + '/' + sport);
            next();
        });
    });

    this.When(/^I place a (.*) bet on a match$/, function(wager, next) {
        // Arrange
        sportsPage.addSelectionToBetSlip();

        // Act
        setTimeout(function() {
            sportsPage.placeBet(wager);
            next();
        }, 1500);

        // Assert
        sportsbookPage.getBalanceAmount().then(function(balanceText) {
            var newBalance = parseInt(balanceText.replace('£', ''));
            expect(newBalance).to.equal(viewModel.balance - viewModel.wager);
        });
    });

    this.Then(/^my bet is shown in my open bets slip$/, function(next) {
        // Unable to do as the account provided does not authenticate
        next();
    });
}