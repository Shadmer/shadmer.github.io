$(document).ready(function(){

    $('.popup__close').click(function () {
        $(this).parents('.popup').removeClass('popup--active');
        $('body').removeClass('noScroll');
    });

});