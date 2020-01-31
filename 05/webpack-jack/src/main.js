

//1. import jquery
//import ** from ** is ES6 feature
import $ from 'jquery'


$(function () {
    $("li:odd")
        .css('backgroundColor', 'lightblue');
    $("li:even")
        .css('backgroundColor', function () {
            return '#' + 'FFFF00';
        });
});

