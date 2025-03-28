import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import groupMediaQueries from 'gulp-group-css-media-queries'; 

// Инициализируем Gulp-Sass с Dart Sass
const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: false
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss()) 
        .pipe(rename({ 
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: '.' }))
        .pipe(app.plugins.browsersync.stream());
};

export const scssWithMediaGroups = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupMediaQueries()) 
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: false
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss()) 
        .pipe(rename({ 
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css)) 
        .pipe(app.plugins.browsersync.stream());
};
