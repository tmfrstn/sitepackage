var gulp = require('gulp');
var del = require('del');
var config = require('../config');

module.exports = function (gulp, plugins) {
    return function () {
		del([
			config.publicDir + '/{Css,JavaScript,Icons,Images,Fonts}/**/*',
		]);
	}
}