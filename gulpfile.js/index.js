/*
 gulpfile.js
 ===========
 Rather than manage one giant configuration file responsible for creating  multiple tasks,
 each task has been broken out into its own file in gulpfile.js/tasks. Any files
 in that directory get automatically required. Add a task file to that directory to create
 a new task.
 gulpfile.js/tasks/default.js specifies the default tasks to run when you run `gulp`.

 get moduels via function
 Source: http://macr.ae/article/splitting-gulpfile-multiple-files.html -> Approach two

*/

var gulp = require('gulp');
var config = require('./config');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins);
}

gulp.task('clean', getTask('clean'));
gulp.task('bower', getTask('bower'));
gulp.task('style', getTask('style'));
gulp.task('javascript', getTask('javascript'));
gulp.task('javascript-header', getTask('javascript-header'));
gulp.task('images', getTask('images'));
gulp.task('icons', getTask('icons'));

gulp.task('default', ['clean','bower','style','javascript','javascript-header','images','icons'], function () {
	gulp.watch(config.assetsDir + '/Css/**/*.css', ['style']);
	gulp.watch(config.assetsDir + '/Sass/**/*.scss', ['style']);
	gulp.watch(config.t3ExtDir + '/*/Resources/Public/Scss/*.scss', ['style']);
	gulp.watch(config.assetsDir + '/JavaScript/**/*.js', ['javascript']);
	gulp.watch(config.assetsDir + '/Images/**/*', ['images']);
	gulp.watch(config.assetsDir + '/Icons/**/*', ['icons']);
});