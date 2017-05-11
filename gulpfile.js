var gulp = require('gulp');
var postcss = require('gulp-postcss');
// autoprefixer 给某些需要兼容性的属性添加浏览器私有前缀
var autoprefixer = require('autoprefixer');
// cssnext 将颜色转换成rgba()
var cssnext = require('cssnext');
// precss 检查了@if @else，编译符合需求的代码
var precss = require('precss');
// alias 定义自己的速写或"别名"
var alias = require('postcss-alias');
// postcss-crip 有数百个属性缩写的插件
var crip = require('postcss-crip');
// 创建CSS图形 postcss-circle(创建圆) postcss-triangle(创建三角形) 
var circle = require('postcss-circle');
var triangle = require('postcss-triangle');
// 设置链接样式
var linkcolor = require('postcss-all-link-colors');
// 使用 top: center; 来达到垂直居中， left: center; 达到水平居中
var center = require('postcss-center');
var apply = require('postcss-apply');

gulp.task('css', function() {
  var processors = [
    autoprefixer,
    cssnext,
    precss,
    alias,
    crip,
    circle,
    triangle,
    linkcolor,
    center,
    apply
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});


gulp.task('default', ['css']);
