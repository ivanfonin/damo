var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true }),
    config = require('../config.js');

gulp.task('dist-php', function() {
    return gulp.src(config.files.php.src)
    .pipe(gulp.dest(config.project.dist));
});

gulp.task('dist-languages', function() {
    return gulp.src(config.files.languages.src)
    .pipe(gulp.dest(config.folders.languages.dist));
});

gulp.task('dist-fonts', function() {
    return gulp.src(config.files.fonts.src)
    .pipe(gulp.dest(config.folders.fonts.dist));
});

gulp.task('dist-images', function() {
    return gulp.src(config.files.images.src)
    .pipe(plugins.imagemin(config.images.imagemin))
    .pipe(gulp.dest(config.folders.images.dist));
});

gulp.task('dist-screenshot', function() {
    return gulp.src(config.images.screenshot.src)
    .pipe(gulp.dest(config.project.dist))
});

gulp.task('dist-scripts', function() {
    return gulp.src(config.files.js.src)
    .pipe(plugins.uglify())
    .pipe(plugins.concat('app.min.js'))
    .pipe(gulp.dest(config.folders.js.dist));
});

gulp.task('dist-scss', function() {
    return gulp.src(config.files.scss.src)
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer('last 2 version'))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest(config.project.temp));
});

gulp.task('dist-style.css', ['scss'], function() {
    return gulp.src([config.project.src + 'style.css', config.project.temp + 'style.css'])
    .pipe(plugins.concat('style.css'))
    .pipe(gulp.dest(config.project.dist));
});

gulp.task('distribute', ['dist-php', 'dist-languages', 'dist-fonts', 'dist-images', 'dist-screenshot', 'dist-scripts', 'dist-style.css']);