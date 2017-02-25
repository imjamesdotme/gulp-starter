/*

  pug.js
  ---
  Compile Pug templates to HTML.

*/

var gulp = require('gulp');
var rename = require('gulp-rename');
var pug = require('gulp-pug')
var browserSync = require('browser-sync');

gulp.task('pug', function buildHTML() {
  return gulp.src('./src/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./release'))
  .pipe(browserSync.reload({stream:true}));
});
