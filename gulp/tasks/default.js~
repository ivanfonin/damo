var gulp = require('gulp'),
    config = require('../config.js'),
    del = require('del');

gulp.task('clean', function (cb) {
    del([config.project.temp], cb);
});

gulp.task('delete', function (cb) {
    del(['./build', './dist'], cb);
});

gulp.task('default', ['clean']);