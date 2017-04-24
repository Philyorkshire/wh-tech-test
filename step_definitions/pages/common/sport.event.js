'use strict';

var driver = require('../../../support/world.js').getDriver();
var CONSTANTS = require('../../../support/constants.js');

const bet = {
    amount: 0.05
}

class SportsPage {

    addSelectionToBetSlip() {
        return driver.findElements({css: '.header-events-grouper .betbutton'}).then(function(elements) {
            elements[0].click();
        });
    }

    placeBet() {
        var betslip = require('betslip.component.js');
        betslip.placeBet(bet.amount);
    }
}

module.exports = SportsPage;