require('./vendor/select2');

function BaseView(options) {
  _.extend(this, options);
}

var prototype = BaseView.prototype;

prototype.installDefaultComponents = function() {
  this._installSelect2();
};

//private methods
prototype._installSelect2 = function() {

  var $select2 = $(".select2-component");

  if ($select2) {
    $select2.select2({
      data: [],
      minimumResultsForSearch: 3
    });
  }
};

export default BaseView;
