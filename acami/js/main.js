$(document).ready(function(){

    // Меню
    $('.mobile-menu__menu').click(function () {
        $('.mobile-menu__top-menu').slideToggle(200);
    });


    // Карусель
    $('.slider__content').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            960:{
                items:2,
                nav:true
            },
            1200:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

    $('.reviews__slider').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            960:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

    if($(window).width() < 960) {
        $('.reviews__slider').removeClass('reviews__width');
    } else {
        $('.reviews__slider').addClass('reviews__width');
    }

    $(window).resize(function(){
        if($(window).width() < 960) {
            $('.reviews__slider').removeClass('reviews__width');
        } else {
            $('.reviews__slider').addClass('reviews__width');
        }
    });

    // // Зум
    $('.zoom').zoom();

    // products
    $('.product__img-btn').click(function (e) {
        e.preventDefault();
        $('.product__img-btn').removeClass('product__img-btn--active');
        $(this).addClass('product__img-btn--active');
        $('.product__img').removeClass('product__img--active');

        $($(this).attr('data-product')).addClass('product__img--active');
    });

    // specifications
    $('.specifications__menu-item').click(function (e) {
        e.preventDefault();
        $('.specifications__menu-item').removeClass('specifications__menu-item--active');
        $(this).addClass('specifications__menu-item--active');
        $('.specifications__body').removeClass('specifications__body--active');

        $($(this).attr('data-specifications')).addClass('specifications__body--active');
    });
});