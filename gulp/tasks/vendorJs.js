import concat from "gulp-concat";

export const vendorJs = () => {
    return app.gulp.src(app.path.src.vendorJs, { sourcemaps: app.isDev })
        .pipe(concat('vendor.min.js'))
        .pipe(app.gulp.dest(app.path.build.vendorJs))
        .pipe(app.plugins.browsersync.stream());
}