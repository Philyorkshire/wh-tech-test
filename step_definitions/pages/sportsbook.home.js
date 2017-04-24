'use strict';

var driver = require('../support/world.js').getDriver();

var Page = {
    open: function() {
        return driver.get('/betting/en-gb');
    }

}