$(document).ready(function(){
    $('.page-header__city').on('click', function (e) {
        e.preventDefault();
        $('#choose-city').addClass('popup--active');
        $('body').addClass('noScroll');
    });

    $('.choose-city__link').click(function (e) {
        e.preventDefault();
        $('.choose-city__tips').slideToggle();
        $('.choose-city__link').toggleClass('choose-city__link--active');
    });

    $('.choose-city__tips-item').click(function (e) {
        e.preventDefault();
        $('.choose-city__link').text($(this).text());
        $('.choose-city__tips-item').removeClass('choose-city__tips-item--active');
        $(this).addClass('choose-city__tips-item--active');
        $('.choose-city__link').removeClass('choose-city__link--active');
        $('.choose-city__tips').slideUp();
    })
});