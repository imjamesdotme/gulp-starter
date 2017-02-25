/*

  default.js
  ---
  This file is run when 'gulp' is run in the Terminal.

*/

var gulp = require('gulp');

gulp.task('default', ['sass', 'scripts', 'pug', 'images', 'browser-sync', 'watch']);
