import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';

gulp.task('js', () => {
  return gulp.src('src/**/*.jsx')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('js'));
