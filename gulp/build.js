module.exports = function(gulp){

  var runSequence = require('run-sequence');
  
  gulp.task('build-dev', function(callback) {
    runSequence(['dist-less']);
  });

  gulp.task('copy-zonejs-to-dist', function(callback) {
    gulp.src(['node_modules/zone.js/zone.js',])
    	.pipe(gulp.dest('dist/'));
  });

  gulp.task('copy-disthtml-to-dist', function(callback) {
  	var rename = require('gulp-rename');
    gulp.src(['app/index.dist.html'])
    	.pipe(rename('index.html'))
    	.pipe(gulp.dest('dist/'));
  });

  gulp.task('build-dist', function(callback) {
    runSequence(['clean-dist', 'copy-zonejs-to-dist' ,'system-build', 'copy-disthtml-to-dist', 'dist-less']);
  });

};