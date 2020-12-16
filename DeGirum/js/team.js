$(function () {
    $('.team-block__item').click(function () {
        $('.popup-team').fadeIn(500);
        $('.more-block__wrapper').fadeIn(750);
    });

    $('.more-block__close').click(function () {
        $('.popup-team').fadeOut(500);
        $('.more-block__wrapper').fadeOut(250);
    });
});