var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});
connect.server({
    livereload: true
  });
});

gulp.task('default', ['webserver']);
gulp.task('default', ['webserver']);