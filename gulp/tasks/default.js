var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    config = require('../config.js');

gulp.task('browsersync', function() {
    browsersync(config.browsersync);
});

gulp.task('browsersync-reload', function () {
    browsersync.reload();
});

gulp.task('default', ['browsersync'], function () {

    gulp.watch(config.files.php.src, ['php', 'browsersync-reload']);

    gulp.watch(config.files.languages.src, ['languages', 'browsersync-reload']);

    gulp.watch(config.files.fonts.src, ['fonts', 'browsersync-reload']);

    gulp.watch(config.files.images.src, ['images', 'browsersync-reload']);

    gulp.watch(config.files.js.client.src, ['scripts', 'browsersync-reload']);

    gulp.watch(config.files.js.admin.src, ['admin-scripts', 'browsersync-reload']);

    gulp.watch(config.files.scss.all, ['style.css', 'browsersync-reload']);

});
