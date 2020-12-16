$(function () {
    $('.vacancy__title').click(function () {
        $(this).parent().toggleClass('vacancy--active');
        $(this).parent().find('.vacancy__content').toggle(500);
    });
});