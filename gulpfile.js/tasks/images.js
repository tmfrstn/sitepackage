var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require ('gulp-imagemin');
var config = require('../config');

module.exports = function (gulp, plugins) {
    return function () {
	gulp.src(config.assetsDir + '/Images/**/*')
		.pipe(changed(config.publicDir + '/Images'))
		.pipe(imagemin())
		.pipe(gulp.dest(config.publicDir + '/Images'));
	}
}