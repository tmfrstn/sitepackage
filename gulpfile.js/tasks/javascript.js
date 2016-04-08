var gulp = require('gulp');
var gutil = require('gulp-util');
var filter = require('gulp-filter');
var streamqueue = require('streamqueue');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var config = require('../config');

module.exports = function (gulp, plugins) {
    return function () {
		var jsFiles = gulp.src([config.assetsDir + '/JavaScript/**/*.js',
		 						'!' + config.assetsDir + '/JavaScript/picturefill.js']);
		var bowerJsFiles = gulp.src(mainBowerFiles())
			.pipe(filter(['*.js', '!' + config.bowerDir + '*.min.js', ], {restore: true})
			.on('error', gutil.log));

		return streamqueue({objectMode: true})
			.done(bowerJsFiles, jsFiles)
			.pipe(jshint())
			.pipe(jshint.reporter('default'))
			.pipe(concat('jsFooterLibs.min.js'))
			.pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
			.pipe(gulp.dest(config.publicDir + '/JavaScript'))
			.on('error', gutil.log);
	}
}