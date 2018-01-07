var gulp = require("gulp");
var includer = require("gulp-content-includer");
var logger = require("log4js").getLogger();

gulp.task("includer", () => {
    return gulp.src("./src/pages/**/*.html").
    pipe(includer({
        'includerReg': /<!\-\-include\s+"([^"]+)"\-\->/g
    })).
    pipe(gulp.dest("./dist"))
});
