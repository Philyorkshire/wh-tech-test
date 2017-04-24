'use strict';

var gulp = require('gulp'),
    cucumber = require('gulp-cucumber');


gulp.task('cucumber-mobile', function() {
    return gulp.src('features/sportsbook/*').pipe(cucumber({
        'steps': 'step_definitions/*/*.js',
        'support': 'support/*.js',
        'format': 'pretty',
        'tags': '@mobile'
    }));
});

gulp.task('cucumber-desktop', function() {
    return gulp.src('features/*').pipe(cucumber({
        'steps': './step_definitions',
        'support': 'support/*.js',
        'format': 'pretty',
        'tags': '@desktop'
    }));
});