var gulp = require('gulp'),
    config = require('../config.js');

gulp.task('watch', function () {
    
    gulp.watch(config.files.php.src, ['php']);
    
    gulp.watch(config.files.languages.src, ['languages']);
    
    gulp.watch(config.files.fonts.src, ['fonts']);
    
    gulp.watch(config.files.images.src, ['images']);
    
    gulp.watch(config.files.js.src, ['scripts']);
    
    gulp.watch(config.files.scss.all, ['style.css']);
    
});