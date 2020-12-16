$(document).ready(function () {

    let scroll = function(e) {
        e.preventDefault();
        try {
            let offset = $($(this).attr('data-scroll')).offset().top;
            if ($(this).hasClass('toScroll') && $(window).scrollTop() === 0) {
                offset -= 167;
            }
            $('html,body').stop().animate({scrollTop: offset}, 1000);
        } catch (e) {
            $('html,body').stop().animate({scrollTop: 0}, 1000);
        }
    };

    $('.scroll').on('click', scroll);
    $('.toScroll').on('click', scroll);

});