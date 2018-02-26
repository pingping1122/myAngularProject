var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
    srcPath: 'src/', // 源码路径
    devPath: 'build/', // 开发目录
    prdPath: 'dist/' // 生产部署目录

};
// 路径相对当前gulpfile.js所在位置
gulp.task('lib', function () {
    gulp.src('bower_components/**/*.js')
        .pipe(gulp.dest(app.devPath + 'vendor'))
        .pipe(gulp.dest(app.prdPath + 'vendor'))
        .pipe($.connect.reload()) // 更改自动通知浏览器进行刷新
});

gulp.task('html', function () {
    gulp.src(app.srcPath + '**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath))
        .pipe($.connect.reload())
});

gulp.task('json', function () {
    gulp.src(app.srcPath + 'data/**/*.json')
        .pipe(gulp.dest(app.devPath + 'data/'))
        .pipe(gulp.dest(app.prdPath + 'data/'))
        .pipe($.connect.reload())
});

gulp.task('less', function () {
    gulp.src(app.srcPath + 'style/index.less')
        .pipe($.less())
        .pipe(gulp.dest(app.devPath + 'css'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.prdPath + 'css'))
        .pipe($.connect.reload())
});

gulp.task('js', function () {
    gulp.src(app.srcPath + 'script/**/*.js')
        .pipe($.concat('index.js'))
        .pipe(gulp.dest(app.devPath + 'js'))
        .pipe($.uglify())
        .pipe(gulp.dest(app.prdPath + 'js'))
        .pipe($.connect.reload())
});

gulp.task('image', function () {
    gulp.src(app.srcPath + 'image/**/*')
        .pipe(gulp.dest(app.devPath + 'image'))
        .pipe($.imagemin())
        .pipe(gulp.dest(app.prdPath + 'image'))
        .pipe($.connect.reload())
});

gulp.task('build', ['image','js','less','lib','html','json']);

gulp.task('clean', function () {
    gulp.src([app.devPath,app.prdPath])
        .pipe($.clean())

});

gulp.task('serve',['build'], function () {
    $.connect.server({
        root:[app.devPath],
        livereload:true //livereload更改后自动刷新浏览器，不需手动刷新--IE不支持
    });
    open('http://localhost:8080');
    gulp.watch(app.srcPath+'script/**/*.js',['js']);
    gulp.watch('bower_components/**/*.js',['lib']);
    gulp.watch(app.srcPath + '**/*.html',['html']);
    gulp.watch(app.srcPath + 'data/**/*.json',['json']);
    gulp.watch(app.srcPath + 'style/index.less',['less']);
    gulp.watch(app.srcPath + 'image/**/*',['image']);
});

gulp.task('default',['serve']);