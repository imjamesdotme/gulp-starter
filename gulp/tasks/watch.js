/*

  watch.js
  ---
  Watches for changes to SASS, Javascript & images.

*/

var gulp = require('gulp');
var watch = require('gulp-watch');
var gutil = require('gulp-util');

gulp.task('watch', function () {
  gulp.watch('src/styles/**/*.scss', ['sass'])
  gulp.watch(["src/scripts/*.js"], ['scripts'])
  gulp.watch('src/**/*.pug', ['pug'])
  gulp.watch(["src/images/*"], ['images'])
  gulp.watch(["./temp/*"], ['clean:temp'])
  gutil.log(gutil.colors.green('Watching for changes...'))
});
