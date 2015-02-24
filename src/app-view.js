var template = require('./app.handlebars');

class AppView {

  constructor(options) {
    _.extend(this, options);

  }
}

var prototype = AppView.prototype;

prototype.render = function() {
  this.el.append(template());
};

export {AppView};