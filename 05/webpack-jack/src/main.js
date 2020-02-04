

//1. import jquery
//import ** from ** is ES6 feature
import $ from 'jquery'


$(function () {
    $("li:odd")
        .css('backgroundColor', 'red');
    $("li:even")
        .css('backgroundColor', function () {
            return '#' + '0000FF';
        });
});

//使用webpack-dev-server 工具来帮我们自动运行打包工具
//npm i webpack-dev-server -D

