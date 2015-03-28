module.exports = function(gulp){
	
	var connect = require('gulp-connect');

	gulp.task('server', function() {
		connect.server({
			root: 'app',
			//livereload: true
		});
	});

};
