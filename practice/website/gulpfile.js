var gulp=require('gulp'),
	nodemon=require('gulp-nodemon'),
	browser=require('browser-sync');
gulp.task('reload',function(){
	browser.init({
		proxy:'http://localhost:3000',
		notify:false,
		port:3001
	});
});
gulp.task('start',function(){
	nodemon({
		script:'app.js',
		ext:'js html',
		env:{'NODE_ENV':'development'}
	});
});
gulp.task('default',['start','reload']);