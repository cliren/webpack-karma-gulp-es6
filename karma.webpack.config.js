var webpackConfig = require("./webpack.config.js");

module.exports = {
  module: {
    loaders: webpackConfig.module.loaders,
    postLoaders: [
      {
        test: /\.js$/,
        exclude: /(specs|node_modules|bower_components)\//,
        loader: 'istanbul-instrumenter'
      }
    ]
  },
  resolve: webpackConfig.resolve,
  plugins: webpackConfig.plugins
};