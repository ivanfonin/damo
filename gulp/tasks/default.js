var gulp = require('gulp'),
    config = require('../config.js'),
    del = require('del');

gulp.task('delete', function (cb) {
    del(["./dist", "./build"], cb);
});

gulp.task('default', ['delete']);