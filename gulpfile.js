var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();


// Default
gulp.task('default', ['browser-sync', 'sass-watch']);

// Browser Sync
gulp.task('browser-sync', function() {
  console.log("Browser sync started");
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Sass
gulp.task('sass', function() {
  console.log("Converting SASS to CSS")
  gulp.src('css/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'));
});

gulp.task('sass-watch', function() {
  console.log("Watching for CSS changes");
  gulp.watch('css/*.scss', ['sass']);
});