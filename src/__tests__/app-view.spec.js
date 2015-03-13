import {AppView} from '../app-view';

define(function(require) {
  var view, el;

  describe("App View", function() {
    beforeEach(function() {
      el = $('<div></div>').appendTo('body');
      view = new AppView({
        el: el
      });
    });

    afterEach(function() {
      el.remove();
    });

    describe('renders', function() {

      beforeEach(function() {
        view.render();
      });

      it("Hello World", function() {
        expect(el.text()).toContain('Hello World!');
      });

    });

  });
});