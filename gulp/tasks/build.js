var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true }),
    config = require('../config.js');

gulp.task('php', function() {
    return gulp.src(config.files.php.src)
    .pipe(gulp.dest(config.project.build));
});

gulp.task('languages', function() {
    return gulp.src(config.files.languages.src)
    .pipe(gulp.dest(config.folders.languages.build));
});

gulp.task('fonts', function() {
    return gulp.src(config.files.fonts.src)
    .pipe(gulp.dest(config.folders.fonts.build));
});

gulp.task('images', function() {
    return gulp.src(config.files.images.src)
    .pipe(gulp.dest(config.folders.images.build));
});

gulp.task('screenshot', function() {
    return gulp.src(config.images.screenshot.src)
    .pipe(gulp.dest(config.project.build))
});

gulp.task('scripts', function() {
    return gulp.src(config.files.js.src)
    .pipe(plugins.sourcemaps.init())
        .pipe(plugins.uglify())
        .pipe(plugins.concat('app.min.js'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(config.folders.js.build));
});

gulp.task('style.scss', function() {
    return gulp.src(config.files.scss.src)
    .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer('last 2 version'))
        .pipe(plugins.minifyCss())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(config.project.temp));
});

gulp.task('style.css', ['style.scss'], function() {
    return gulp.src([config.project.src + 'style.css', config.project.temp + 'style.css'])
    .pipe(plugins.concat('style.css'))
    .pipe(gulp.dest(config.project.build));
});

gulp.task('build', ['php', 'languages', 'fonts', 'images', 'screenshot', 'scripts', 'style.css']);