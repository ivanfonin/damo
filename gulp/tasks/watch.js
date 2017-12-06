'use strict'

var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    config = require('../config.js')

// Start Browsersync.
gulp.task('browsersync', () => {
    browsersync(config.browsersync);
});

// Watch task.
gulp.task('watch', ['browsersync'], () => {

    gulp.watch(config.files.php.src, ['watch-php'])

    gulp.watch(config.files.languages.src, ['watch-languages'])

    gulp.watch(config.files.fonts.src, ['watch-fonts'])

    gulp.watch(config.files.images.src, ['watch-images'])

    gulp.watch(config.files.js.client.src, ['watch-scripts'])

    gulp.watch(config.files.js.admin.src, ['watch-admin-scripts'])

    gulp.watch(config.files.scss.all, ['watch-styles'])

})

// Reload browsers when 'php' task is done.
gulp.task('watch-php', ['php'], (done) => {
    browsersync.reload()
    done()
})

// Reload browsers when 'languages' task is done.
gulp.task('watch-languages', ['languages'], (done) => {
    browsersync.reload()
    done()
})

// Reload browsers when 'fonts' task is done.
gulp.task('watch-fonts', ['fonts'], (done) => {
    browsersync.reload()
    done()
})

// Reload browsers when 'images' task is done.
gulp.task('watch-images', ['images'], (done) => {
    browsersync.reload()
    done()
})

// Reload browsers when 'scripts' task is done.
gulp.task('watch-scripts', ['scripts'], (done) => {
    browsersync.reload()
    done()
})

// Reload browsers when 'admin-scripts' task is done.
gulp.task('watch-admin-scripts', ['admin-scripts'], (done) => {
    browsersync.reload()
    done()
})

// Reload browsers when 'style.css' task is done.
gulp.task('watch-styles', ['style.css'], (done) => {
    browsersync.reload()
    done()
})
