module.exports = function(gulp){
	
	var clean = require('gulp-clean');

	gulp.task('clean-dist', function() {
		gulp.src('dist', {read: false})
        	.pipe(clean());
	});

};
