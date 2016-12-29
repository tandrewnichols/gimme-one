const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const config = require('./config');

gulp.task('uglify', () => {
  gulp.src(config.lib)
    .pipe(uglify())
    .pipe(rename('gimme-one.min.js'))
    .pipe(gulp.dest('dist'));
});
