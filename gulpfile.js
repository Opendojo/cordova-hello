// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var server = require('gulp-server-livereload');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('www/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('www/js/*.js', ['lint']);
});

// Serve Static File With Livereload
gulp.task('webserver', function() {
  gulp.src('./www/')
    .pipe(server({
      livereload: true,
      open: false,
      port: 8080
    }));
});

// Default Task
gulp.task('default', ['lint', 'watch']);