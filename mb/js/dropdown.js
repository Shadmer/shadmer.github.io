$(document).ready(function(){

    $('.main-navigation a').mouseenter(function (e) {

        if (!$(this).hasClass('main-navigation__dropdown')) {
            return;
        }

        $('.page-header').addClass('page-header--bg');
        $('.main-navigation__dropdown').removeClass('main-navigation__dropdown--active');
        $(this).addClass('main-navigation__dropdown--active');
        $('.page-header__dropdown-block').stop().slideDown();
        $('.dropdown__content').hide();
        $($(this).attr('data-dropdown')).stop().slideDown();
    });

    $('.page-header__nav').mouseleave(function () {
        // return;
        $('.page-header').removeClass('page-header--bg');
        $('.main-navigation__dropdown').removeClass('main-navigation__dropdown--active');
        $('.page-header__dropdown-block').stop().slideUp();
    });


});