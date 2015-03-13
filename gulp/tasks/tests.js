var gulp = require('gulp');
var karma = require('karma');
var runSequence = require('run-sequence');
var config = require('../config').karma;
var singleRun = true;

gulp.task('test-no-quit', function(done) {
  karma.server.start({
    configFile: config,
    singleRun: singleRun
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

gulp.task('quit', function(cb) {
  process.exit(0);
});

gulp.task('test', function(cb) {
  runSequence('test-no-quit', 'quit');
  cb();
});

//run continuously
gulp.task('test1', function(cb) {
  singleRun = false;
  runSequence('test-no-quit', 'quit');
  cb();
});