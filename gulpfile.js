const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
  // where is the scss file
  return gulp.src('./scss/**/*.scss')
  // pass through sass compiler
  .pipe(sass())
  // where to save compiled css
  .pipe(gulp.dest('./css'))
  // stream changes to all browsers
  .pipe(browserSync.stream());
}


function watch() {
  // init local server
  browserSync.init({
    server : {
      baseDir: './'
    }
  });
  // watch css
  gulp.watch('./scss/**/*.scss', {ignoreInitial: false}, style);
  // watch html
  gulp.watch('./*.html').on('change', browserSync.reload);
  // watch js
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
