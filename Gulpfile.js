'use-strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');

gulp.task('sass-compile', function (done) {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));

  done();
});

gulp.task('combine-css', function (done) {
  // gulp.src('./css/**/*.css')
    // .pipe(minifyCss())
    // .pipe(concat('styles.min.css'))
    // .pipe(gulp.dest('./css'));

  done();
});


gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass-compile'));
  // gulp.series('sass-compile', 'combine-css');

  // done();
});
