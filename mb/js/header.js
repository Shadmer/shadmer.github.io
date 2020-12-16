$(document).ready(function () {

    let toggleHeader = function() {

        if ($(window).width() <= 1200) {
            $('.page-header__default').hide();
            $('.page-header__fixed').hide();
            $('.page-header__mobile').show();
            return;
        }

        $('.page-header__mobile').hide();

        if ($(window).scrollTop() > 0) {

            $('.page-header').addClass('page-header--fixed');
            $('.page-header__default').hide();
            $('.page-header__fixed').slideDown();
            $('.page-header').addClass('page-header--scrolled');
        } else {
            $('.page-header').removeClass('page-header--fixed');
            $('.page-header__default').fadeIn();
            $('.page-header__fixed').hide();
            $('.page-header').removeClass('page-header--scrolled');
        }

    };
    toggleHeader();

    $(window).scroll(function() {
        toggleHeader();
    });

    $(window).resize(function () {
        toggleHeader();
    });

    $('.toggle').on('click', function () {
        if ($(this).hasClass('toggle--active')) {
            $(this).removeClass('toggle--active');
            $('.page-header__mobile-menu').slideUp(300);
        } else {
            $(this).addClass('toggle--active');
            $('.page-header__mobile-menu').slideDown(300);
        }
    });

});