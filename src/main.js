require('lodash');
require('jquery');
require("bootstrap/dist/css/bootstrap");
require('bootstrap/dist/js/bootstrap');

import {AppView} from './app-view';

// on load bootstrap your app
document.addEventListener('DOMContentLoaded', function() {

  new AppView({
    el: $('#content')
  }).render();

});

