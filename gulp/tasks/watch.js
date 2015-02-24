var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch([config.templates], ['webpack']);
  gulp.watch([config.js], ['webpack']);
  gulp.watch(config.markup.src, ['markup']);
});
