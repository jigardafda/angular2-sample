module.exports = function(gulp){
	
	var connect = require('gulp-connect');

	gulp.task('server', function() {
		connect.server({
			root: 'app',
			port: 8080,
			//livereload: true
		});
	});

	gulp.task('dist-server', function() {
		connect.server({
			root: 'dist',
			port: 8888,
			//livereload: true
		});
	});

};
