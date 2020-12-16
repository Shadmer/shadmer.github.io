$(document).ready(function(){

    $('.card__img-btn').click(function (e) {
        e.preventDefault();
        $('.card__img-btn').removeClass('card__img-btn--active');
        $(this).addClass('card__img-btn--active');
        $('.card__img').removeClass('card__img--active');

        $($(this).attr('data-card')).addClass('card__img--active');
    });

});