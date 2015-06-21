/*

  scripts.js
  ---
  Concat javascript & output to 'temp' then minify & place in release.

*/

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
// to concat an order use: return gulp.src(['file1.js', 'file2.js', 'file3.js'])
  return gulp.src('./src/scripts/*.js')
    .pipe(concat('concat.js', {
    newLine: '\n;' // The newline is needed in case the file ends with a line comment, the semi-colon is needed if the last statement wasn't terminated.
    }))
    .pipe(gulp.dest('./temp'))
    .pipe(rename('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./release/js'));
});
