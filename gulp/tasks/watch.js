var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch([config.js, config.templates], ['webpack']);
  gulp.watch(config.markup.src, ['markup']);
});
