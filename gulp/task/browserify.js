var gulp = require('gulp');
var browserify = require('gulp-browserify');
var notify = require('gulp-notify');

gulp.task('browserify', function(){
    //资源
    gulp.src('./src/js/lib/*.js').
    pipe(gulp.dest('./dist/js/lib'));
    //
    gulp.src('./src/**/entrance.js').
    pipe(browserify({
        'insertGlobals': false
    })).
    on("error", notify.onError({
        "message": "Error: <%= error.message %>"
    })).
    pipe(gulp.dest('./dist'));
    
    return
})
