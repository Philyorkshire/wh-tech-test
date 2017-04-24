'use strict';

var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome.js');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.path = function(path) {
    return driver.executeScript('document.location.hash = "' + path + '";')
};

module.exports.driver = driver;