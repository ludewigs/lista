var gulp = require('gulp')
var eslint = require('gulp-eslint')
var clean = require('gulp-clean')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var es = require('event-stream')
var htmlmin = require('gulp-htmlmin')
var cleanCSS = require('gulp-clean-css')
var runSequence = require('run-sequence')
var rename = require('gulp-rename')

gulp.task('clean', function () {
  return gulp.src('dist/*')
  .pipe(clean())
})

gulp.task('eslint', function () {
  return gulp.src('js/**/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
})

gulp.task('uglify', function () {
  return es.merge([
    gulp.src(['lib/angular/angular.min.js', 'lib/angular/angular-route.min.js', 'lib/angular/angular-messages.min.js']),
    gulp.src(['js/**/*.js', '/lib/angular/angular-locale_pt-br.js']).pipe(uglify())
  ])
  .pipe(concat('all.min.js'))
  .pipe(gulp.dest('dist/js'))
})

gulp.task('htmlmin', function () {
  return gulp.src('view/*.htm')
  .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
  .pipe(gulp.dest('dist/view'))
})

gulp.task('cssmin', function () {
  return es.merge([
    gulp.src('lib/bootstrap/css/bootstrap.min.css'),
    gulp.src('css/**/*.css').pipe(cleanCSS())
  ])
  .pipe(concat('styles.min.css'))
  .pipe(gulp.dest('dist/css'))
})

gulp.task('copy', function () {
  return gulp.src('index-prod.htm')
  .pipe(rename('index.htm'))
  .pipe(gulp.dest('dist'))
})

gulp.task('default', function (cb) {
  return runSequence('clean', ['eslint', 'uglify', 'htmlmin', 'cssmin', 'copy'], cb)
})
