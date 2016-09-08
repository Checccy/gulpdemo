var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('default',function(){
	gulp.src('js/*.js')
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build'))
})