var gulp = require('gulp');
var bower = require('gulp-bower');
var config = require('../config');

module.exports = function (gulp, plugins) {
    return function () {
		bower(config.bowerDir)
			.pipe(gulp.dest(config.bowerDir)) ;
	}
}