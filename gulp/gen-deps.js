module.exports = function(gulp){
	var runSequence = require('run-sequence');
	
	gulp.task('gen-deps', function(callback) {
		runSequence(['build-angular2', 'npm-to-vendors']);
	});

};
