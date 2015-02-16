var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    config = require('../config.js');

gulp.task('browsersync', function() {
    browsersync({
        proxy: 'themetest.dev'
    });
});

gulp.task('browsersync-reload', function () {
    browsersync.reload();
});
