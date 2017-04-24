'use strict';

var driver = require('../../../support/world.js').getDriver();

var Component = {
    placeBet: function(amount) {
        var enterAmountToBet = () => driver.findElement({css: '.betslip-selection__stake-input'}).sendKeys("1");
        var submit = () => driver.findElement({css: '#place-bet-button'}).click();

        return Promise.all([
            enterAmountToBet(),
            submit()
        ]);
    }
};

module.exports = Component;