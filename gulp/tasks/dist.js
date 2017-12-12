'use strict'

var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    plugins = require('gulp-load-plugins')({ camelize: true }),
    config = require('../config.js')

// Copy readme file.
gulp.task('dist-readme', () => {
    return gulp.src(config.files.readme)
        .pipe(gulp.dest(config.project.dist))
})

// Copy php files.
gulp.task('dist-php', () => {
    return gulp.src(config.files.php.src)
        .pipe(gulp.dest(config.project.dist))
})

// Copy language files.
gulp.task('dist-languages', () => {
    return gulp.src(config.files.languages.src)
        .pipe(gulp.dest(config.folders.languages.dist))
})

// Copy images.
gulp.task('dist-images', () => {
    return gulp.src(config.files.images.src)
        .pipe(gulp.dest(config.folders.images.dist))
})

// Copy video files.
gulp.task('dist-videos', () => {
    return gulp.src(config.files.videos.src)
        .pipe(gulp.dest(config.folders.videos.dist))
})

// Copy screenshot.
gulp.task('dist-screenshot', () => {
    return gulp.src(config.images.screenshot.src)
        .pipe(gulp.dest(config.project.dist))
})

// Compile admin scripts.
gulp.task('dist-admin-js', () => {
    return gulp.src(config.files.js.admin.src)
        .pipe(gulp.dest(config.folders.js.admin.dist))
})

//
gulp.task('dist-js', ['dist-admin-js'], () => {
    return gulp.src(config.files.js.client.src)
        .pipe(plugins.sourcemaps.init())
            .pipe(plugins.uglify())
            .pipe(plugins.concat('app.min.js'))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(config.folders.js.client.dist))
})

gulp.task('dist-fonts', () => {
    return gulp.src(config.files.fonts.src)
        .pipe(gulp.dest(config.folders.fonts.dist))
})

gulp.task('dist-scss', ['dist-fonts'], () => {
    return gulp.src(config.files.scss.src)
        .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass())
            .on('error', config.logErrors)
            .pipe(plugins.postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
            // One change with 'build' task - not minifying css file for wordpress.org
            //.pipe(plugins.cleanCss()) -
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(config.project.temp))
})

gulp.task('dist-css', ['dist-scss'], () => {
    return gulp.src([config.project.src + 'style.css', config.project.temp + 'style.css'])
        .pipe(plugins.concat('style.css'))
        .pipe(gulp.dest(config.project.dist))
})

gulp.task('dist', ['dist-php', 'dist-languages', 'dist-images', 'dist-videos', 'dist-screenshot', 'dist-js', 'dist-css'])