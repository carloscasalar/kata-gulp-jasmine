const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const PATH_SPECS = '**/*.spec.js';
const PATH_JS = '**/*.js';

gulp.task('test', () =>
    gulp.src(PATH_SPECS)
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine())
);

gulp.task('watch', function() {
  gulp.watch(PATH_JS, ['test']);
});

gulp.task('default', ['test', 'watch']);

