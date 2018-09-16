var gulp  = require('gulp')
var shell = require('gulp-shell')
var watch = require('gulp-watch')
var gutil = require('gulp-util')

 
gulp.task('compile', shell.task([
  `clang ${gutil.env.FILES_TO_COMPILE} -o ${gutil.env.FILE_OUTPUT}`,
]))

gulp.task('watch', function() {
    gulp.watch('./**/*.c', ['compile']);
});


gulp.task('default', ['compile'] ,function() {
    gulp.watch('./**/*.c', ['compile']);
});
