/*

  images.js
  ---
  Compress images.

*/

var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync');

gulp.task('images', function () {
  return gulp.src('src/images/*')
    .pipe(changed('release/img')) // Ignores unchanged images.
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
  }))
    .pipe(gulp.dest('release/img'))
    .pipe(browserSync.reload({stream:true}));
});
