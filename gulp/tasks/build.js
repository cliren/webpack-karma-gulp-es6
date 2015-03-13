var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(cb) {

  runSequence([
      'clean'
    ],
    'test-no-quit',
    'webpack',
    'markup',
    'quit');

  cb();
});
