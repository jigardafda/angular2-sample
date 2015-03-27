module.exports = function(gulp){

	gulp.task('build-angular2', function (cb) {
		
		var run = require('../node_modules/angular2/es6/prod/es5build');
		run({
			src: 'node_modules/angular2/es6/prod/',
			dest: 'app/scripts/vendors/angular2',
			modules: 'instantiate'
		});

	});

};