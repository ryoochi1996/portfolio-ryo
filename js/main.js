$(function() {
    $('.box').click(function(e) {
        e.preventDefault();
        fade = $(this).parents().next();
        console.log(fade);
        fade.fadeIn();
    });

    $('.work_modal').click(function() {
        $(this).fadeOut();
    });


    $('.box2').click(function(e) {
        e.preventDefault();
        fade = $(this).parents().next().next();
        console.log(fade);
        fade.fadeIn();
    });

    $('.work_modal2').click(function() {
        $(this).fadeOut();
    });

    $('.box3').click(function(e) {
        e.preventDefault();
        fade = $(this).parents().next().next().next();
        console.log(fade);
        fade.fadeIn();
    });

    $('.work_modal3').click(function() {
        $(this).fadeOut();
    });

    

    new WOW().init()

    $(document).ready(function() {
        $('.drawer').drawer();
      });

      $('a[href^="#"]').on('click', function() {
        var header = $('.header').innerHeight();
        var id = $(this).attr('href');
        var position = 0;
        if( id != '#') {
            var position = $(id).offset().top - header;
        }
        
        $('html, body').animate({
            scrollTop: position
        },
        600);

    });

    
});


