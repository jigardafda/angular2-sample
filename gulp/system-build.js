module.exports = function(gulp){

  gulp.task('system-build', function() {
    var path = require("path");
    var Builder = require('systemjs-builder');

    var builder = new Builder({
      baseURL: 'file:' + path.resolve('app'),
      paths: {
        'angular2/*':'scripts/vendors/angular2/*.js',
        'rtts_assert/*': 'scripts/vendors/rtts_assert/*.js',
        'rx/dist/rx.all': 'scripts/vendors/rx/rx.all.js', // Why ???
        'main' : 'scripts/main.es6'
      },
      transpiler: 'traceur'
    })
    .buildSFX('main', 'dist/scripts.js')
    //.build('main', 'dist/scripts.js')
    .then(function() {
      console.log('Build complete');
    })
    .catch(function(err) {
      console.log('Build error');
      console.log(err);
    });

  });

};