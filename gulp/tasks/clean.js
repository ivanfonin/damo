var gulp = require('gulp'),
    config = require('../config.js'),
    del = require('del');

gulp.task('clean-iconfont', function(cb) {
    del([
      config.folders.fonts.src + config.iconfont.name,
      config.folders.icons.compiled + config.iconfont.name
    ], cb);
});

gulp.task('clean', ['clean-iconfont'], function (cb) {
    del([config.project.temp, './build', './dist'], cb);
});
