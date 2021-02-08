$(function() {
    $.ajaxPrefilter(function(option) {
        // console.log(option);
        // console.log(option.url);
        option.url = 'http://ajax.frontend.itheima.net' + option.url
    })
})