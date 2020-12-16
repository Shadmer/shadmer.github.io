$(function () {

    let swiper = new Swiper('.puzzle__swiper .swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000,
        },
    });

    let swiper2 = new Swiper('.reviews .swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000,
        },
    });

    let swiper3 = new Swiper('.stand .swiper-container', {
        effect: 'fade',
        autoplay: {
            delay: 3000,
        },
    });

    $('.ba-slider').beforeAfter();

    $('.menu-nav__item').on('click', function (e) {
        e.preventDefault();

        let href = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: href.offset().top + 1
        }, 400);
    });

    function addActiveMenu(id) {
        $('.menu-nav__item')
            .removeClass('menu-nav__item--active')
            .filter("a[href^='#"+ id + "']")
            .addClass('menu-nav__item--active');
    }

    $(window).scroll(function () {
        let current = $(this).scrollTop();
        let desk = $('#desk').offset().top;
        let strategy = $('#strategy').offset().top;
        let milk = $('#milk').offset().top;
        let lakt = $('#lakt').offset().top;
        let results = $('#results').offset().top;

        if (current < desk) {
            $('.menu-nav').slideUp();
        } else {
            $('.menu-nav').slideDown();
        }

        if (current >= desk && current < strategy) {
            addActiveMenu('desk');
        }

        if (current >= strategy && current < milk) {
            addActiveMenu('strategy');
        }

        if (current >= milk && current < lakt) {
            addActiveMenu('milk');
        }

        if (current >= lakt && current < results) {
            addActiveMenu('lakt');
        }

        if (current >= results) {
            addActiveMenu('results');
        }

    });

});

