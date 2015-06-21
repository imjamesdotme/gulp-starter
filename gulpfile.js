/*

  gulpfile.js
  ---
  Gulp tasks are split into indiviual scripts in order to keep
  the main file clean & make longer maintenance simpler.
  
  To add a new task, add the file to the /gulp/tasks/ directory &
  include it in the default.js file so it runs when you call 'gulp'.

*/

var requireDir = require('require-dir');
var tasks = requireDir('./gulp/tasks');
