var gulp = require('gulp'),
    config = require('../config.js'),
    del = require('del');

gulp.task('clean', function (cb) {
    del([config.project.temp, './build', './dist'], cb);
});

gulp.task('default', ['browsersync'], function () {
    
    gulp.watch(config.files.php.src, ['php', 'browsersync-reload']);
    
    gulp.watch(config.files.languages.src, ['languages', 'browsersync-reload']);
    
    gulp.watch(config.files.fonts.src, ['fonts', 'browsersync-reload']);
    
    gulp.watch(config.files.images.src, ['images', 'browsersync-reload']);
    
    gulp.watch(config.files.js.src, ['scripts', 'browsersync-reload']);
    
    gulp.watch(config.files.scss.all, ['style.css', 'browsersync-reload']);
    
});
