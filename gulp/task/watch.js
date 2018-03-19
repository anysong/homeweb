var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("watch", ["less","includer"], function(){
	watch('./src/js/**/*.js',function(){
		gulp.start("browserify");
	});
	watch('./src/css/**/*.less',function(){
		gulp.start("less");
	});
	watch('./src/**/*.html',function(){
		gulp.start("includer");
	});
});
