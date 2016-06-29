var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnext = require('gulp-cssnext'),
    connect = require('gulp-connect');


var paths = {
  'scss': 'src/scss/',
  'css': 'dist/css/'
};

gulp.task('sass', function() {
  return gulp.src(paths.scss + '**/*.scss')
    .pipe(sass())
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(cssnext())
    .pipe(gulp.dest(paths.css))
});

gulp.task('connect', function() {
    connect.server({
        root: 'dist/',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./dist/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./dist/*.html'], ['html']);
});

gulp.task('default', ['connect','sass', 'watch']);
