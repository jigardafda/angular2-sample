module.exports = function(gulp){

  var rename = require('gulp-rename');
  
  gulp.task('copy-zonejs-to-dist', function(callback) {
    gulp.src(['node_modules/zone.js/zone.js',])
    	.pipe(gulp.dest('dist/'));
  });

  gulp.task('copy-disthtml-to-dist', function(callback) {
  	
    gulp.src(['app/index.dist.html'])
    	.pipe(rename('index.html'))
    	.pipe(gulp.dest('dist/'));
  });

};