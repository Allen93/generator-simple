var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sourcemaps = require('gulp-sourcemaps');

var webpackConfig = require("./config/webpack.config.js");
var webpack = require('gulp-webpack');
var setting = require('./config/setting.js');

//  TODO: 加入sourceMap

gulp.task('server', function() {
  gulp.src(setting.tempPath).pipe(server({
    livereload: {
      enable: true,
      filter: function(filePath, cb) {
        cb(true);
      }
    },
    defaultFile: 'index.html',
    open: true,
  }));
});

gulp.task('watch', function() {
  gulp.watch(['lib/**/*.js', 'test/test.js'], ['webpack'])
});

gulp.task('copy', function() {
  gulp.src(['test/index.html'])
  .pipe(gulp.dest(setting.tempPath))
});

gulp.task('webpack', function() {
  gulp.src('./')
  .pipe(sourcemaps.init())
  .pipe(webpack(webpackConfig))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(setting.tempPath));;
});

gulp.task('default', ['webpack', 'copy', 'watch', 'server']);