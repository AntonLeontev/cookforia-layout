import pug from "gulp-pug";
import formatHtml from "gulp-format-html"

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(pug({
            pretty: true,
            verbose: true
        }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(formatHtml())
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}