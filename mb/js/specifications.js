$(document).ready(function(){

    $('.specifications__menu-item').click(function (e) {
        e.preventDefault();
        $('.specifications__menu-item').removeClass('specifications__menu-item--active');
        $(this).addClass('specifications__menu-item--active');
        $('.specifications__body').removeClass('specifications__body--active');

        $($(this).attr('data-specifications')).addClass('specifications__body--active');
        $($(this).attr('data-specifications')).addClass('fadeIn');
    });

});