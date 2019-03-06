'use strict'

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config.js')

// Start Browsersync.
gulp.task('browsersync', (done) => {
    browserSync.init(config.browsersync)
    done()
});

// Watch task.
gulp.task('watch', ['browsersync'], () => {

    gulp.watch(config.files.php.src, ['watch-php'])

    gulp.watch(config.files.languages.src, ['watch-languages'])

    gulp.watch(config.files.fonts.src, ['watch-fonts'])

    gulp.watch(config.files.images.src, ['watch-images'])

    gulp.watch(config.files.js.client.src, ['watch-js'])

    gulp.watch(config.files.scss.all, ['watch-css'])

})

// Reload browsers when 'php' task is done.
gulp.task('watch-php', ['php'], (done) => {
    browserSync.reload()
    done()
})

// Reload browsers when 'languages' task is done.
gulp.task('watch-languages', ['languages'], (done) => {
    browserSync.reload()
    done()
})

// Reload browsers when 'fonts' task is done.
gulp.task('watch-fonts', ['fonts'], (done) => {
    browserSync.reload()
    done()
})

// Reload browsers when 'images' task is done.
gulp.task('watch-images', ['images'], (done) => {
    browserSync.reload()
    done()
})

// Reload browsers when 'js' task is done.
gulp.task('watch-js', ['js'], (done) => {
    browserSync.reload()
    done()
})

// Reload browsers when 'css' task is done.
gulp.task('watch-css', ['css'], (done) => {
    browserSync.reload()
    done()
})
