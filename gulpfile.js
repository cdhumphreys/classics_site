var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var path = './build/pages/plot';

function errorHandler(error) {
  console.log(error.toString());
}

gulp.task('browser-sync', function() {
  browserSync.init({
      server: path
  });
});


gulp.task('watch', ['browser-sync'], function () {
    gulp.watch(path+"/*.html").on('change', browserSync.reload);
    gulp.watch(path+"/css/*.css").on('change', browserSync.reload);
    gulp.watch(path+"/js/*.js").on('change', browserSync.reload);
});
