var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  livereload = require('gulp-livereload');


gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: './bin/www',
    ext: 'js coffee jade'
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed(__dirname);
    }, 500);
  });
});

gulp.task('default', [
  'develop'
]);
