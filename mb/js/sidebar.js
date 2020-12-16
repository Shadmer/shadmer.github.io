$(document).ready(function(){
    $('.sidebar__toggle').click(function (e) {
        $(this).toggleClass('sidebar__toggle--active');
        $(this).parents('.sidebar__item').find('.sidebar__extra').slideToggle();
    });
});