var gulp = require('gulp'),
    compass   = require('gulp-compass');


gulp.task('compass',function(){
    return gulp.src('.sass/*.scss')
        .pipe(compass({
            sourcemap: false,
            time: true,
      css: './css/',
      sass: './sass/',
      style: 'compact' //nested, expanded, compact, compressed
        }))
        .pipe(gulp.dest('./css/'));
});


gulp.task('watch',function(){
    gulp.watch('./sass/*.scss',['compass']);
});

gulp.task('default',['compass','watch']);
