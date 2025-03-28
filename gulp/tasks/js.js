import concat from "gulp-concat";

export const js = () => {
    return app.gulp.src(app.path.src.js, {sourcemaps: app.isDev })
        .pipe(concat('app.min.js'))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}