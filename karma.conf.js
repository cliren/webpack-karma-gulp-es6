module.exports = function(config) {
  var preProcessors = ['webpack'],
    reporters = ['spec'];
  if (process.env['IDE_COVERAGE']) {
    preProcessors.push('coverage');
  } else {
    reporters.push('coverage');
  }

  config.set(
    {
      basePath: './',
      frameworks: ['jasmine'],
      browsers: ['PhantomJS'],
      reporters: reporters,
      colors: true,
      files: [
        './node_modules/phantomjs-polyfill/bind-polyfill.js',
        './src/all-specs.js'
      ],
      preprocessors: {
        './src/all-specs.js': preProcessors
      },
      coverageReporter: {
        dir: 'coverage',
        reporters: [
          {
            type: 'html'
          },
          {
            // Output a coverage summary to console
            type: 'text-summary'
          }
        ]
      },
      webpack: require("./karma.webpack.config.js"),

      plugins: [
        'karma-coverage',
        'istanbul-instrumenter-loader',
        'karma-webpack',
        'karma-jasmine-ajax',
        'karma-jasmine',
        'karma-phantomjs-launcher',
        'karma-spec-reporter'
      ],

      port: 9876,
      reportSlowerThan: 500,
      captureTimeout: 20000,
      logLevel: config.LOG_INFO,
      singleRun: true
    });
};
