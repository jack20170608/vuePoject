

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

