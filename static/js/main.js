$(document).ready(function () {

    "use strict";

    const wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         false,        // default
    });
    wow.init();

    /*=======================================================
			LOADER
    ========================================================*/

    $('.preloader-holder').delay(1000).fadeOut('slow');

    /*=======================================================
			СКРОЛЛ СТРАНИЦЫ
    ========================================================*/

    $('body').scrollspy({
        target: '.navbar'
    })

    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 200, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /*=======================================================
			OWL ПРОЕКТЫ
    ========================================================*/

    $("#owl-projects").owlCarousel({
        loop:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        autoplay:true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1]

    });

    /*=======================================================
			OWL ТЕХНОЛОГИИ
    ========================================================*/

    $("#owl-technology").owlCarousel({
        loop:true,
        autoplayTimeout: 3000,
        autoplay:true,

        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 5]

    });

});