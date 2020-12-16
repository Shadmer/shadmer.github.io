$(document).ready(function(){
    var gallery = new Swiper('.projects__content', {
        spaceBetween: 10,
        effect: 'slide',
        autoHeight: true,
    });

    $('.projects__menu-item').on('mouseover', function () {
        gallery.slideTo($(this).index());
        $(this).addClass('projects__menu-item--active');
    });

    $('.projects__menu-item').on('mouseleave', function () {
        $(this).removeClass('projects__menu-item--active');
    });


});