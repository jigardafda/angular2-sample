var gulp = require('gulp');

// loading tasks 
require('./gulp/build-angular2')(gulp);


// Default task
gulp.task('default', function() {
	console.log('default');
});


gulp.task('default', function() {
	var install = require("gulp-install");

	gulp.src(['./bower.json', './package.json'])
		.pipe(install());
});
