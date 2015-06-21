/*

  browserSync.js
  ---
  Refresh the browser when files change.

*/

var gulp = require('gulp');
var browserSync = require('browser-sync');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./release"
        }
    });
});
