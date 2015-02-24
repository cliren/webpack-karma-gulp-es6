var gulp = require('gulp');
var karma = require('karma');
var runSequence = require('run-sequence');
var config = require('../config').karma;

gulp.task('test-no-quit', function(done) {
  karma.server.start({
    configFile: config
  }, function(exitCode) {
    if (exitCode === 0) {
      done();
    } else {
      var msg = "Tests failed with exit code:" + exitCode;
      console.error(msg);
      throw msg;
    }
  });
});

gulp.task('test', function(cb) {
  runSequence(['test-no-quit'], function() {
    process.exit(0);
    cb();
  });
});