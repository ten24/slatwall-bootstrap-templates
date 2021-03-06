const gulp = require('gulp');
const htmlPartial = require('gulp-html-partial');

gulp.task('html', function () {
    return gulp.src(['src/account-templates/*.html', 'src/product-templates/*.html', 'src/checkout-templates/*.html'])
        .pipe(htmlPartial({
            basePath: 'src/partials/'
        }))
        .pipe(gulp.dest('dist'));
});
