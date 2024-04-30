import gulp from "gulp"
import imagemin from "gulp-imagemin"

gulp.task('default', () => {
    // define task
    return gulp.src('src/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dest/image'))
})