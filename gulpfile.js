var gulp = require('gulp');
var sass = require('gulp-sass');

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