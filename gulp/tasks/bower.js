var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    bowerFiles = require('main-bower-files'),
    config = require('../config.js');

// Copy fonts from 'bower_components' to 'src/fonts' folder
gulp.task('bower-fonts', function() {
    var fontsFilter = plugins.filter(['*.eot', '*.woff', '**/*.svg', '*.ttf']);
    
    return gulp.src(bowerFiles())
    .pipe(fontsFilter)
    .pipe(gulp.dest(config.folders.fonts.src))
    .pipe(fontsFilter.restore());
});

// Copy JavaScript libraries from 'bower_components' to 'src/js' folder
gulp.task('bower-scripts', function() {
    var jsFilter = plugins.filter('*.js');
    
    return gulp.src(bowerFiles())
    .pipe(jsFilter)
    .pipe(gulp.dest(config.folders.js.src))
    .pipe(jsFilter.restore());
});

gulp.task('bower', ['bower-fonts', 'bower-scripts']);



















/*
gulp.task('scripts', function() {
    
});

gulp.task('styles', function() {
    
});*/