var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + "/dist",
    filename: 'main.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /jquery\.js$/, loader: "exports?jQuery!script"},
      {test: /\.js$/, exclude: /node_modules|bower_components/, loader: 'babel-loader'},
      {test: /\.handlebars$/, loader: 'handlebars-loader'},
      {test: /\.less$/, loader: "style!css!less"},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
      {test: /\.woff$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
      {test: /\.woff2$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
      {test: /\.ttf$/, loader: "file-loader"},
      {test: /\.eot$/, loader: "file-loader"},
      {test: /\.svg$/, loader: "file-loader"}
    ],
    noParse: []
  },
  resolve: {
    root: [
      nodeModulesPath,
      bowerComponentsPath],
    alias: {
      "jquery$": "jquery/dist/jquery.js",
      "lodash$": "lodash/lodash.js"
    },
    extensions: ['',
      '.js',
      '.css']
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      _: "lodash"
    })
  ]
};