/*

  bower.js
  ---
  Install bower dependencies.

*/

var gulp = require('gulp');
var bower = require('gulp-bower');

var bowerConfig = {
  bowerDirectory: './bower_components'
}

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(bowerConfig.bowerDirectory))
});
