/*

  jade.js
  ---
  Compile Jade to HTML.

*/

var gulp = require('gulp');
var rename = require('gulp-rename');
var jade = require('gulp-jade')
var browserSync = require('browser-sync');

gulp.task('jade', function () {
  return gulp.src('./src/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./release'))
    .pipe(browserSync.reload({stream:true}));
});
