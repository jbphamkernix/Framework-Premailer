var gulp = require('gulp');
var premailer = require('gulp-premailer');

// build
gulp.task('build', function () {
    gulp.src('*.html')
        .pipe(premailer())
        .pipe(gulp.dest('builds/'));
});

// Watch All
gulp.task('watch', function() {
  gulp.watch('builds/', ['build']);
});

// Default
gulp.task('default', ['build', 'watch']);
