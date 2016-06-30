var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnext = require('gulp-cssnext'),
    connect = require('gulp-connect');


var paths = {
    'scss': 'src/scss/',
    'css': 'dist/css/'
};

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

gulp.task('default', ['connect', 'watch-scss', 'watch-html']);
