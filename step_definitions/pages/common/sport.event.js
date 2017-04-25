'use strict';

var driver = require('../../../support/world.js').getDriver();
var CONSTANTS = require('../../../support/constants.js');
var Page = require('./page.js');

const bet = {
    amount: 0.05
}

class SportsPage extends Page {

    open(sport) {
        return driver.get(CONSTANTS.HOME_ADDRESS + '/' + sport);
    } 

    addSelectionToBetSlip() {
        return driver.findElements({css: '.header-events-grouper .betbutton'}).then(function(elements) {
            elements[0].click();
        });
    }

    placeBet() {
        var BetslipComponent = require('./betslip.component.js');
        BetslipComponent.placeBet(bet.amount);
    }
}

module.exports = new SportsPage();