'use strict';

var driver = require('../../../support/world.js').getDriver();
var CONSTANTS = require('../../../support/constants.js');

class Page {

    isLoggedIn() {
        driver.findElements({css: '#balanceLink'}).then(function(elements) {
            return !!elements.length;
        });
    }

    login(username, password) {
        var openLoginModal = () => driver.findElement({css: '#accountTabButton .icon-expanded'}).click();
        var enterUsername = () => driver.findElement({css: '#loginUsernameInput'}).sendKeys(username);
        var enterPassword = () => driver.findElement({css: '#loginPasswordInput'}).sendKeys(password);
        var submit = () => driver.findElement({css: '#loginButton'}).click();

        return Promise.all([
            openLoginModal(),
            enterUsername(),
            enterPassword(),
            submit()
        ]);
    }

    getBalanceAmount() {
        return driver.findElement({css: '#balanceLink'}).getText();
    }
}

module.exports = Page;