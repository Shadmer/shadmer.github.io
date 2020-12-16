$(function () {

    //todo убрать - функция тестирования
    let openRandomModal = function() {
        let rand = Math.floor(Math.random() * 2);
        let modal = $('.modal');
        $(modal[rand]).addClass('modal--active');
    };

    let closeModal = function() {
        $('.modal').removeClass('modal--active');
    };

    $('.menu-link').on('click', function (e) {
        e.preventDefault();

        let href = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: href.offset().top + 1
        }, 400);
    });
    $('.registration__form').on('submit', function (e) {
        e.preventDefault();
        openRandomModal();
    });
    $('.winners__btn a').on('click', function (e) {
        e.preventDefault();
        $('.winners__more').slideToggle();
        $('.winners__btn').toggleClass('winners__btn--active');

    });
    $('.modal button').on('click', closeModal);
    $('.modal__close').on('click', closeModal);
    $('.modal__overlay').on('click', closeModal);

    $(function(){
        $('input[type="tel"]').mask("+7 (999) 999 99 99");
    });

});

