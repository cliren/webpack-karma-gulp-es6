var template = require('./app.handlebars');
import BaseView from './base-view';

class AppView extends BaseView {

  constructor(options) {
    super(options)
  }

  render() {
    this.el.append(template());
    this.installDefaultComponents();
  }

}

export {AppView};