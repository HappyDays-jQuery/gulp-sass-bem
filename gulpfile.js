var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    connect = require('gulp-connect');


var paths = {
    'scss': 'src/scss/',
    'css': 'dist/css/'
};

gulp.task('scss', function () {
  return (
    gulp.src('./src/**/*.scss')
    .pipe(postcss([
      require("postcss-import")(),
      require("postcss-url")(),
      require("cssnano")(),
      require("postcss-browser-reporter")(),
      require("postcss-reporter")(),
    ]))
    .pipe(gulp.dest('./dest'))
  )
});

gulp.task('watch-scss', function(){
    gulp.watch('./src/scss/**/*.scss', ['scss']);
});

gulp.task('connect', function () {
    connect.server({
        root: 'dist/',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./dist/*.html')
        .pipe(connect.reload());
});

gulp.task('watch-html', function () {
    gulp.watch(['./dist/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch-scss', 'watch-html']);
