'use strict';

var gulp = require('gulp'),
    cucumber = require('gulp-cucumber');


gulp.task('ui-tests', function() {
    return gulp.src('features/sportsbook/*').pipe(cucumber({
        'steps': 'step_definitions/*/*.js',
        'support': 'support/*.js'
    }));
});