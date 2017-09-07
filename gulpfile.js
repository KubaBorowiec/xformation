var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  minifycss = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  jade = require('gulp-jade'),
  compass = require('gulp-compass'),
  imp = require('compass-importer'),
   sourcemaps = require('gulp-sourcemaps');

// ////////////////////////////////////////////////
// Log Error
// // /////////////////////////////////////////////

function errorlog(err){
  console.error(err.message);
  this.emit('end');
}


// ////////////////////////////////////////////////
// Scripts Tasks
// ///////////////////////////////////////////////

gulp.task('scripts', function() {
  return gulp.src('./build/js/**/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))   
    .pipe(gulp.dest('./build/vendor/'))
    .pipe(reload({stream:true}));
});
gulp.task('scriptsConcat', function() {
  return gulp.src(['./build/vendor/angular.min.js','./build/vendor/angular-route.min.js','./build/vendor/angular-sanitize.min.js','./build/vendor/app.min.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(rename('app.min.js'))   
    .pipe(gulp.dest('./app/js/'))
    .pipe(reload({stream:true}));
});

// ////////////////////////////////////////////////
// Styles Task
// ///////////////////////////////////////////////

gulp.task('compass', function() {
  gulp.src('build/sass/style.scss')
    .pipe(plumber())
    .pipe(compass({
      config_file: './config.rb',
      css: 'app/css',
      sass: 'build/sass'
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('./app/css/'));
});



// ////////////////////////////////////////////////
// HTML Tasks
// // /////////////////////////////////////////////

gulp.task('html', function(){
    gulp.src('*.html')
    .pipe(reload({stream:true}));
});
gulp.task('css', function(){
    gulp.src('app/css/*.css')
    .pipe(reload({stream:true}));
});
gulp.task('js', function(){
    gulp.src('build/js/*.js')
    .pipe(reload({stream:true}));
});


// ////////////////////////////////////////////////
// Browser-Sync Tasks
// // /////////////////////////////////////////////

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

// ////////////////////////////////////////////////
// Watch Tasks
// // /////////////////////////////////////////////

gulp.task ('watch', function(){ 
  gulp.watch('build/sass/**/*.scss', ['compass']);
  gulp.watch('build/templates/**/*.jade', ['jade']);
  gulp.watch('build/js/**/*.js', ['scripts']);
  gulp.watch('index.html', ['html']);
  gulp.watch('app/css/*.css', ['css']);
  gulp.watch('app/js/*.js', ['js']);
  gulp.watch('build/js/*.js', ['js']);
});
//////////////////////////////////////////////////
// JADE
/////////////////////////////////////////////////
gulp.task('jade', function() {
  gulp.src('build/templates/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('./app'))
    
});

gulp.task('default', ['html','watch','js','css','compass','scripts','scriptsConcat','jade','browser-sync']);

