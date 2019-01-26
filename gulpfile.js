const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('styles', function () {
  return gulp.src('./src/css/style.css')
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(csso())
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('scripts', function () {
  gulp.src('./src/js/index.js')
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
  
});

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('default', ['clean'], function () {
  runSequence(
    'styles',
    'scripts'
  );
});