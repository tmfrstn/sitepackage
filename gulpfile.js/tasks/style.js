var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var es = require('event-stream');
var config = require('../config');

module.exports = function (gulp, plugins) {
    return function () {
		var vendorFiles = gulp.src(config.assetsDir + '/Css/**/*.css');
		var lessFiles = gulp.src([config.assetsDir + '/Less/**/*.less'])
			.pipe(less());
		var bowerSassFiles = gulp.src([config.assetsDir + '/Sass/**/*.scss'])
			.pipe(sass({
				includePaths: [
					config.bowerDir + '/bootstrap-sass/assets/stylesheets',
					config.bowerDir + '/font-awesome/scss',
					config.bowerDir + '/magnific-popup/src/css',
				],
			})
			.on('error', gutil.log));

		return es.concat(bowerSassFiles, vendorFiles, lessFiles)
			.pipe(concat('styles.min.css'))
			.pipe(gutil.env.type === 'production' ? cleanCSS({compatibility: 'ie8'}) : gutil.noop())
			.pipe(gulp.dest(config.publicDir + '/Css'))
			.on('error', gutil.log);
	}
}