var typed=new Typed(".typing",{
    strings:["","Web Developer","JavaScript Developer","WordPress Developer","React Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

$('.portfolio').magnificPopup({
    delegate: 'a',
    type:'image' ,
    gallery:{
        enabled:true,
    }

});

// Nav js 

$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });
    
    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');

    });

});