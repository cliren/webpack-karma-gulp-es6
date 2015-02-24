var path = require('path');
var dest = './dist',
  src = './src',
  karmaPath = path.join(__dirname, '../karma.conf.js');

console.log(__dirname);
module.exports = {
  browserSync: {
    server: {
      baseDir: [dest]
    },
    files: [
      dest + '/**'
    ],
    open: false
  },
  markup: {
    src: src + "/**/*.html",
    dest: dest
  },
  karma: karmaPath,
  templates: src + "/**/*.handlebars",
  js: src + "/**/*.js"
};
