var gulp = require('gulp');
var browserSync = require('browser-sync').create();


function errorHandler(error) {
  console.log(error.toString());
}

gulp.task('browser-sync', function() {
  browserSync.init({
      server: './build/pages/topic'
  });
});


gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("build/*.html").on('change', browserSync.reload);
    gulp.watch("build/css/*.css").on('change', browserSync.reload);
    gulp.watch("build/js/*.js").on('change', browserSync.reload);
});
