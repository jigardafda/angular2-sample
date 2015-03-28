module.exports = function(gulp){

	gulp.task('npm-to-vendors', function () {

		// System JS
		gulp.src([
				'node_modules/systemjs/dist/*.js',
				'node_modules/systemjs/dist/*.map'
			]).pipe(gulp.dest('app/scripts/vendors/systemjs/'));

		// Traceur
		gulp.src('node_modules/traceur/bin/traceur.js')
			.pipe(gulp.dest('app/scripts/vendors/traceur/'));

		// ES6-shim
		gulp.src([
				'node_modules/es6-shim/*.js',
				'node_modules/es6-shim/*.map'
			]).pipe(gulp.dest('app/scripts/vendors/es6-shim/'));

		// ES5-shim
		gulp.src('node_modules/es5-shim/*.js')
			.pipe(gulp.dest('app/scripts/vendors/es5-shim/'));

		// es6-module-loader
		gulp.src([
				'node_modules/es6-module-loader/dist/*.js',
				'node_modules/es6-module-loader/dist/*.map'
			]).pipe(gulp.dest('app/scripts/vendors/es6-module-loader/'));

		// rx
		gulp.src([
				'node_modules/rx/dist/*.js',
				'node_modules/rx/dist/*.map'
			]).pipe(gulp.dest('app/scripts/vendors/rx/'));

		// zone
		gulp.src([
				'node_modules/zone.js/zone.js',
			]).pipe(gulp.dest('app/scripts/vendors/zonejs/'));
	});

};