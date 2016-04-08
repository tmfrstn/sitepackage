var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var config = require('../config');

module.exports = function (gulp, plugins) {
    return function () {
		gulp.src(config.assetsDir + '/JavaScript/picturefill.js')
			.pipe(jshint())
         	.pipe(jshint.reporter('default'))
			.pipe(concat('jsHeaderLibs.min.js'))
			//only uglify if gulp is ran with '--type production'
			.pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
			.pipe(gulp.dest(config.publicDir + '/JavaScript'));
	}
}

