# gulp-starter
Basic setup for using [Gulp.js](http://gulpjs.com). Gulp tasks include SASS, Javascript, Image Optimization and Watch.

**Gulp Tasks Included**
* SASS (Ruby SASS) - Com
* Javascript (Concat & Minify)
* Image Minification
* Watch (Watches for any changes to SASS & JS)
* Clean (Cleans out the temp directory)

**Folder Structure** 

This is an example folder structer that gulp-starter has been setup to use. You can change the source & output directories by editing the scripts located in `gulp/tasks`.

```
├── gulp
  ├── tasks

├── node_modules
  ├── ...

├── release
  ├── css
  ├── img
  ├── js
  ├── index.html

├── src
  ├── images
  ├── scripts
  ├── styles
  
├── gulpfile.js
├── package.json  
```

## Getting Started
1. Download [Node.js](http://nodejs.org) & make sure you have [npm](http://npmjs.com) installed.
2. Change the directory to the root of your project. You can do this with the following Terminal command `cd myproject`.
3. Clone or download this repo to you project. To clone type `git clone https://github.com/imjamesdotme/gulp-starter.git`
4. Now you'll have the gulp-starter in the root of your project (it's best to make sure the files from this repo are sat in your root directory & not contained in a seperate folder inside the root). To install all of the node_modules required to run gulp; type `npm install` into the Terminal. You may need to use the `sudo` command, which can be done like so `sudo npm install`. This will then fetch all of the modules required.
5. Type `gulp` into the Terminal & Gulp should now run everything located in the default.js file (which also includes the watch script which will continue running & watching for changes to your SASS & JS).
6. SASS files will be output to `release/css` & Javascripts files will be output to `release/js`.
7. You can change the source & output of your SASS & JS files by editing the scripts located in the `gulp/tasks` folder.
