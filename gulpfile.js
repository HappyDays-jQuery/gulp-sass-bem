var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnext = require('gulp-cssnext');

var paths = {
  'scss': 'src/scss/',
  'css': 'dist/css/'
}

gulp.task('sass', function() {
  return gulp.src(paths.scss + '**/*.scss')
    .pipe(sass())
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(cssnext())
    .pipe(gulp.dest(paths.css))
});
