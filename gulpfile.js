var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnext = require('gulp-cssnext'),
    connect = require('gulp-connect'),
    styleguide = require('sc5-styleguide');


var paths = {
    'scss': 'src/scss/',
    'css': 'dist/css/'
};
var outputPath = 'build';

gulp.task('styleguide:generate', function() {
  return gulp.src('*.scss')
    .pipe(styleguide.generate({
        title: 'My Styleguide',
        server: true,
        rootPath: outputPath,
        overviewPath: 'README.md'
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('main.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('watch-styleguide', ['styleguide'], function() {
  // Start watching changes and update styleguide whenever changes are detected 
  // Styleguide automatically detects existing server instance 
  gulp.watch(['*.scss'], ['styleguide']);
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

gulp.task('scss', function () {
    return gulp.src(paths.scss + '**/*.scss')
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.message);
        })
        .pipe(cssnext({
            browsers: 'last 4 versions'
        }))
        .pipe(gulp.dest(paths.css))
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

gulp.task('default', ['connect', 'watch-scss', 'watch-html', 'watch-styleguide']);
