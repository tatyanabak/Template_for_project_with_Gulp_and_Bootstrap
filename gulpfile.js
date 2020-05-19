"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var server = require("browser-sync").create();
var del = require("del");

gulp.task("css", function () {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'source/sass/*.scss'])
	.pipe(plumber())
	.pipe(sourcemap.init())
	.pipe(sass())
	.pipe(postcss([
		autoprefixer()
	]))
  .pipe(csso())
  .pipe(rename("style.min.css"))
	.pipe(sourcemap.write("."))
	.pipe(gulp.dest("build/css"))
	.pipe(server.stream());
});

gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("build/js"))
        .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png, jpg, svg}")
  .pipe(imagemin([
    imagemin.svgo()
  ]))
  .pipe(gulp.dest("build/img"))
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });


	gulp.watch(["node_modules/bootstrap/scss/bootstrap.scss", "source/sass/**/*.{scss,sass}"], gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    "source/img/**",
    "source/*.html"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
})

gulp.task("build", gulp.series("clean", "copy", "css", "js"));
gulp.task("start", gulp.series("build", "server"));
