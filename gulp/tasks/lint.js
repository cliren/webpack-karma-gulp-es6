var gulp = require('gulp');
var jshint = require('gulp-jshint');
var config = require('../config');

gulp.task('lint', function() {
  return gulp.src(config.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});