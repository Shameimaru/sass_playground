const gulp = require('gulp'),
    sass = require('gulp-sass');
gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/stylesheets'));
});
gulp.task('sass:watch', function() {
    gulp.watch('./src/sass/*.scss', ['sass']);
});
gulp.task('default', ['sass']);