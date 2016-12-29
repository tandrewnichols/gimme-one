const gulp = require('gulp');
const codeclimate = require('gulp-codeclimate-reporter');

gulp.task('codeclimate', () => {
  if (process.version.indexOf('v4') > -1) {
    gulp.src('coverage/lcov.info', { read: false })
      .pipe(codeclimate({
        token: 'a4845a89e39b4d8f2ee068388a00a9e34a5986f87194dc77d840f3936550d3f1'
      }));
  }
});

