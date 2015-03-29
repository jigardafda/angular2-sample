module.exports = function(gulp){
	
	var less = require('gulp-less');
	var concat = require('gulp-concat');
	var path = require('path');

	gulp.task('dev-less', function () {
	  return gulp.src('app/**/*.less')
	    .pipe(less())
	    .pipe(concat('styles.css'))
	    .pipe(gulp.dest('./app/'));
	});

	gulp.task('dist-less', function () {
	  return gulp.src('app/**/*.less')
	    .pipe(less())
	    .pipe(concat('styles.css'))
	    .pipe(gulp.dest('./dist/'));
	});

};
