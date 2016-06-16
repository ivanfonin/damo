var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
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

gulp.task('images', function() {
    return gulp.src(config.files.images.src)
    .pipe(gulp.dest(config.folders.images.build));
});

gulp.task('videos', function() {
    return gulp.src(config.files.videos.src)
    .pipe(gulp.dest(config.folders.videos.build));
});

gulp.task('screenshot', function() {
    return gulp.src(config.images.screenshot.src)
    .pipe(gulp.dest(config.project.build));
});

gulp.task('scripts', function() {
    return gulp.src(config.files.js.src)
    .pipe(plugins.sourcemaps.init())
        .pipe(plugins.uglify())
        .pipe(plugins.concat('app.min.js'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(config.folders.js.build));
});

gulp.task('iconfont', function() {
  return gulp.src(config.files.icons.src)
    .pipe(plugins.iconfont({ fontName: config.iconfont.name }))
    .on('glyphs', function(glyphs, options) {
      gulp.src(config.folders.icons.src + '_template.scss')
        .pipe(plugins.consolidate('lodash', {
          glyphs: glyphs,
          fontName: config.iconfont.name,
          fontPath: 'fonts/' + config.iconfont.name + '/',
          className: config.iconfont.class
        }))
        .pipe(gulp.dest(config.folders.icons.compiled + config.iconfont.name))
    })
    .pipe(gulp.dest(config.folders.fonts.src + config.iconfont.name + '/'));
});

gulp.task('fonts', ['iconfont'], function() {
    return gulp.src(config.files.fonts.src)
    .pipe(gulp.dest(config.folders.fonts.build));
});

gulp.task('style.scss', ['fonts'], function() {
    return gulp.src(config.files.scss.src)
    .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass())
        .on('error', config.logErrors)
        .pipe(plugins.postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(plugins.cleanCss())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(config.project.temp));
});

gulp.task('style.css', ['style.scss'], function() {
    return gulp.src([config.project.src + 'style.css', config.project.temp + 'style.css'])
    .pipe(plugins.concat('style.css'))
    .pipe(gulp.dest(config.project.build));
});

gulp.task('build', ['php', 'languages', 'images', 'videos', 'screenshot', 'scripts', 'style.css']);
