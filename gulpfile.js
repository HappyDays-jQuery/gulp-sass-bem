var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint'),
    csso = require('gulp-csso'),
    postcss = require('gulp-postcss'),
    concat = require("gulp-concat"),
    styleguide = require('sc5-styleguide'),
    connect = require('gulp-connect');

var paths = {
    'scss': 'src/scss/',
    'css': 'dist/css/',
    'public': 'dist',
    'build': 'build'
};

var browsers = [
    '> 3%'
];

gulp.task('watch-scss', function () {
    return gulp.watch('*.scss', ['css']);
});

gulp.task('scss', function () {
    return gulp.src(paths.scss + '*.scss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .pipe(sass())
        .pipe(postcss([
            require('doiuse')({
                browsers: browsers,
                ignore: [
                    'css-transitions',
                    'border-radius'
                ]
            }),
            require('autoprefixer')({browsers: browsers}),
            require('css-mqpacker')
        ]))
        .pipe(csso())
        .pipe(gulp.dest(paths.css));
});

gulp.task('connect', function () {
    connect.server({
        root: paths.public,
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src(paths.public + '*.html')
        .pipe(connect.reload());
});

gulp.task('watch-html', function () {
    gulp.watch([paths.public + '*.html'], ['html']);
});

gulp.task('styleguide:generate', function () {
    return gulp.src(paths.scss + '**/*.scss')
        .pipe(styleguide.generate({
            title: 'Styleguide',
            server: true,
            rootPath: paths.build,
            overviewPath: 'README.md'
        }))
        .pipe(gulp.dest(paths.build));
});

gulp.task('styleguide:applystyles', function () {
    return gulp.src([
        'src/scss/main.scss'
    ])
        .pipe(concat('main.scss'))
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest(paths.build));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

gulp.task('default', ['connect', 'watch-html', 'scss', 'watch-scss', 'styleguide']);
