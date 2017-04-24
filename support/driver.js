'use strict';

var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome.js');
var options = new chrome.Options().addArguments('window-size=1200,800');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

driver.path = function(path) {
    return driver.executeScript('document.location.hash = "' + path + '";')
};

module.exports.driver = driver;