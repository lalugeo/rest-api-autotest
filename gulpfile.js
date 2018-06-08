const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('default', () => gulp.src('./**/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));
