'use strict';

var driver = require('../../../support/world.js').getDriver();
var expect = require('chai').expect;

class BetslipComponent {

    placeBet(wager) {
        var enterAmountToBet = () => driver.findElement({css: '.betslip-selection__stake-input'}).sendKeys(wager);
        var submit = () => driver.findElement({css: '#place-bet-button'}).click();

        return Promise.all([
            enterAmountToBet(),
            this.verifyValidBetSlip(wager),
            submit()
        ]);
    }

    verifyValidBetSlip() {
        var getReturnAmount = () => driver.findElement({css: '#total-to-return-price'}, function (element) {
            expect(element.getText).not.toBeNull();
        });
    
        var getTotalStake = () => driver.findElement({css: '#total-stake-price'}, function (element) {
            expect(element.getText).not.toBeNull();
        });

        Promise.all([
            getReturnAmount(),
            getTotalStake()
        ]);
    }
};

module.exports = new BetslipComponent();