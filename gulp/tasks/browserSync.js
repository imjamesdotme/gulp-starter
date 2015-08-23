/*

  browserSync.js
  ---
  Refresh the browser when files change.

*/

var gulp = require('gulp');
var browserSync = require('browser-sync');
var htmlInjector = require('bs-html-injector');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./release"
        }
    });
});

browserSync.use(htmlInjector, {
    // Files to watch that will trigger the injection.
   files: "./release/**/*.html"
});
