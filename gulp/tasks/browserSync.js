var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config').browserSync;

gulp.task('browserSync', ['webpack', 'markup'], function() {
  browserSync(config);
});

var proxyMiddleware = function(req, res, next) {
  var httpProxy = require('http-proxy');
  var proxy = httpProxy.createProxyServer({
    target: 'http://localhost:8080/'
  }).on('error', function(e) {
    console.log(JSON.stringify(e, null, ' '))
  });

  if (req.url.indexOf('api') != -1) {
    proxy.web(req, res);
  } else {
    next();
  }
};

gulp.task('browserSync', ['webpack', 'markup'], function() {
  //config.server.middleware = proxyMiddleware;

  browserSync(config);
});
