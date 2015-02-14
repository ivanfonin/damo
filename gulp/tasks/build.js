var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('../config.js');

gulp.task('php', function() {
    return gulp.src(config.files.php.src)
    .pipe(gulp.dest(config.folders.php.dest));
});

gulp.task('languages', function() {
    return gulp.src(config.files.languages.src)
    .pipe(gulp.dest(config.folders.languages.dest));
});

gulp.task('fonts', function() {
    return gulp.src(config.files.fonts.src)
    .pipe(gulp.dest(config.folders.fonts.dest));
});

gulp.task('build', ['php', 'languages', 'fonts']);