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

// Copy language files.
gulp.task('dist-languages', () => {
    return gulp.src(config.files.languages.src)
        .pipe(gulp.dest(config.folders.languages.build))
})

// Copy images.
gulp.task('dist-images', () => {
    return gulp.src(config.files.images.src)
        .pipe(gulp.dest(config.folders.images.build))
})

// Copy video files.
gulp.task('dist-videos', () => {
    return gulp.src(config.files.videos.src)
        .pipe(gulp.dest(config.folders.videos.build))
})

// Copy screenshot.
gulp.task('dist-screenshot', () => {
    return gulp.src(config.images.screenshot.src)
        .pipe(gulp.dest(config.project.build))
})

// Copy javascrip libraries and theme script.
gulp.task('dist-theme-js', () => {
    return gulp.src(config.files.js.theme.src)
        .pipe(gulp.dest(config.folders.js.theme.build))
})

// Compile scripts.
gulp.task('dist-js', ['dist-theme-js'], () => {
    // Set up the browserify instance on a task basis.
  return browserify({ entries: config.files.js.app.src, extensions: ['.js'], debug: true })
    .transform(vueify)
    .transform(babelify, { presets: ['es2015'] })
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(plugins.sourcemaps.init({ loadMaps: true }))
        // Add transformation tasks to the pipeline here.
        .pipe(plugins.uglify())
        .on('error', gutil.log)
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(config.folders.js.app.build))
})

gulp.task('dist-fonts', () => {
    return gulp.src(config.files.fonts.src)
        .pipe(gulp.dest(config.folders.fonts.build))
})

gulp.task('dist-admin-css', ['dist-fonts'], () => {
    return gulp.src(config.files.css.src)
        .pipe(gulp.dest(config.folders.css.build))
})

gulp.task('dist-scss', ['admin-css'], () => {
    return gulp.src(config.files.scss.src)
        .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass())
            .on('error', config.logErrors)
            .pipe(plugins.postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
            .pipe(plugins.cleanCss())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(config.project.temp))
})

gulp.task('dist-css', ['dist-scss'], () => {
    return gulp.src([config.project.src + 'style.css', config.project.temp + 'style.css'])
        .pipe(plugins.concat('style.css'))
        .pipe(gulp.dest(config.project.build))
})

gulp.task('dist', ['dist-php', 'dist-languages', 'dist-images', 'dist-videos', 'dist-screenshot', 'dist-js', 'dist-css'])
