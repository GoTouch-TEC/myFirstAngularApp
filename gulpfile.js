var gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	clean = require('gulp-clean'),
	rev = require('gulp-rev'),
	runSequence = require('run-sequence'),
	postcss = require('gulp-postcss'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('autoprefixer'),
	sass = require('gulp-ruby-sass'),
	webserver = require('gulp-webserver'),
	rename = require('gulp-rename');

gulp.task('sass', function () {
  sass('scss/index.scss', {sourcemap: true, style: 'compact'})
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer({ browsers: ['last 10 versions'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
});

// Server run
gulp.task('webserver', function () {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8080,
      host: '0.0.0.0'
    }));
});