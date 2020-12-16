$(document).ready(function(){

    var swiper = new Swiper('.slider', {
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            progressbarOpposite: true,
        },
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
    });

});