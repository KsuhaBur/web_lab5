$(document).ready(function (){
    $('.burger').click(function (event){
        $('.burger, .nav_list, .ru_eng_nav').toggleClass('active');
        // $('body').toggleClass('lock');
    })
})

$(document).ready(function () {
    $('.nav_list a').click(function (event) {
        $('.burger, .nav_list ,.ru_eng_nav').removeClass('active');
        // $('body').removeClass('lock');
    })
})