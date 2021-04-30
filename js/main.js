$(function() {
    $('.work-cursor').click(function(e) {
        e.preventDefault();
        fade = $(this).parents().next();
        console.log(fade);
        fade.fadeToggle();
    });

    $('.work_modal').click(function() {
        $(this).fadeToggle();
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


