var gulp = require('gulp');
var webpack = require("webpack");
var webpackConfig = require("../../webpack.config.js");
var bundleLogger = require('../util/bundleLogger');

var appName = 'Sample App';

gulp.task("webpack", function(callback) {
  bundleLogger.start(appName);

  var myConfig = Object.create(webpackConfig);

  // run webpack
  webpack(myConfig, function(err, stats) {
    bundleLogger.end(appName);
    callback();
  });
});