import replace from "gulp-replace";
import plumber from "gulp-plumber";
import browsersync from "browser-sync";
import newer from "gulp-newer";

export const plugins = {
    replace: replace,
    plumber: plumber,
    browsersync: browsersync,
    newer: newer,
}