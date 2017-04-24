'use strict';

var driver = require('../../support/world.js').getDriver();

const credentials = {
    username: '{redacted}',
    password: '{redacted}'
};

class SportsbookHomePage {

    open() {
        return driver.get('http://sports.williamhill.com/betting/en-gb');
    }

    login() {
        var openLoginModal = () => driver.findElement({css: '#accountTabButton .icon-expanded'}).click();
        var enterUsername = () => driver.findElement({css: '#loginUsernameInput'}).sendKeys(credentials.username);
        var enterPassword = () => driver.findElement({css: '#loginPasswordInput'}).sendKeys(credentials.password);
        var submit = () => driver.findElement({css: '#loginButton'}).click();

        return Promise.all([
            openLoginModal(),
            enterUsername(),
            enterPassword(),
            submit()
        ]);
    }
}

module.exports = new SportsbookHomePage();