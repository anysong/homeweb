var gulp = require("gulp");
var less = require("gulp-less");

gulp.task("less", function(){
	return gulp.src(["./src/**/entrance.less", "./src/**/common.less"]).
	pipe(less()).
	pipe(gulp.dest("./dist/"));
})