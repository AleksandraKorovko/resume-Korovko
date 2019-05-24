$(document).ready( function(){
    $('.header').on('click','.menu-btn', function(){
        $(this).toggleClass('active');
        $('.nav-wrapper').fadeToggle(200);
    })
    $('.nav-wrapper a').click(function(){
        $(".menu-btn").removeClass("active");
        $('.nav-wrapper').fadeToggle(200);
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top 
        }, 500);
        return false;
    });
});
