$(document).ready(function(){
    $('.page-header__searching').click(function (e) {
        e.preventDefault();
        $('.page-header__search-block').slideDown();
    });

    $('.searching__close').click(function (e) {
        e.preventDefault();
        $('.page-header__search-block').slideUp();
    });
});