/*

  sass.js
  ---
  Compile & minify sass files, then output to release.

*/

var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
  return sass('./src/styles/main.scss', {
    style: 'compressed'
    })
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./release/css'))
    .pipe(browserSync.reload({stream:true}));
});
