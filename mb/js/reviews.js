$(document).ready(function(){
    var galleryThumbs = new Swiper('.reviews__menu', {
        spaceBetween: 10,
        slidesPerView: 4,
        direction: 'vertical',
        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },
        // mousewheel: true,

    });
    var galleryTop = new Swiper('.reviews__content', {
        spaceBetween: 10,
        effect: 'fade',
        autoHeight: true,
        thumbs: {
            swiper: galleryThumbs
        }
    });
});