/*

  clean.js
  ---
  Removes old files from the temp directory.

*/

var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('clean:temp', function () {
  return gulp.src('./temp/*')
    .pipe(gulp.dest('./temp'))
    .pipe(vinylPaths(del));
});
