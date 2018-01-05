var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("watch", [], function(){
	watch('./src/js/**/*.js',function(){
		console.log('tt');
	});
	watch('./src/css/**/*.less',function(){
		gulp.start("less");
	});
});
