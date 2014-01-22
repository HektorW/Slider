require.config({
  shim: {},

  paths: {
    jquery: '../bower_components/jquery/jquery'
  }
});

require([
  'Slider'
], function(Slider) {
  new Slider();
});