import concat from "gulp-concat";
import terser from "gulp-terser";

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
        .pipe(concat('app.min.js'))
        .pipe(terser())
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}
