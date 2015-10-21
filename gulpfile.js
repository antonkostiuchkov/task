var gulp 					= require('gulp'),
		postcss 			= require('gulp-postcss'),
		csswring			= require('csswring'),
		autoprefixer 	= require('autoprefixer'),
		lost				 	= require('lost'),
		normalize			= require('postcss-normalize'),
		minifyHtml		= require('gulp-minify-html'),
		uglifyJs			= require('gulp-uglify'),
		concat 				= require('gulp-concat'),
		sass					= require('gulp-sass'),
		rucksack			= require('rucksack-css'),
		browserSync 	= require('browser-sync'),
		reload      	= browserSync.reload;



// Sass > CSS
// With Postcss
gulp.task('styles', function(){
	var processors = [
		csswring,
		lost,
		normalize,
		autoprefixer,
		rucksack
	];

	return gulp.src('app/css/main.scss')
		.pipe(sass())
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dist'))
		.pipe(reload({stream:true}));
});



// HTML
// Compiles, uglifies, reloads
gulp.task('templates', function() {
	gulp.src('app/index.html')
		.pipe(minifyHtml())
		.pipe(gulp.dest('./dist'))
		.pipe(reload({stream:true}));
});


// JavaScript
// Uglifies, concats
gulp.task('scripts', function () {
	gulp.src('app/js/*.js')
		.pipe(concat('app.js'))
		.pipe(uglifyJs())
		.pipe(gulp.dest('./dist'))
		.pipe(reload({stream:true}));
});


// Static server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './dist'
    }
  });
});



// Watching for canges
gulp.task('watch', function(){
	gulp.watch('**/*.scss', ['styles']);
	gulp.watch('**/*.html', ['templates']);
	gulp.watch('app/js/*.js', ['scripts']);
});



// Default task
gulp.task('default', [
    'watch',
    'browser-sync'
 ]);
