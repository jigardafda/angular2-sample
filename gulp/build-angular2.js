module.exports = function(gulp){

	gulp.task('build-angular2', function () {
		
		require('../node_modules/angular2/es6/prod/es5build')({
			src: 'node_modules/angular2/es6/prod/',
			dest: 'app/scripts/vendors/angular2',
			modules: 'instantiate'
		});
		
		require('../node_modules/rtts_assert/es6/es5build')({
			src: 'node_modules/rtts_assert/es6/',
			dest: 'app/scripts/vendors/rtts_assert',
			modules: 'instantiate'
		});

	});

};