$(function () {
    let $img = $('.parallax');

    function move(x, y) {
        $img.addClass('parallax-active');
        let xser = $img.offset().left + $img.width() / 2;
        let yser = $img.offset().top + $img.height() / 2;
        let otnX = x - xser;
        let otnY = y - yser;
        let raznX = otnX / $img.width() * 100 * 2;
        let raznY = otnY / $img.height() * 100 * 2;
        let trX = raznY / 100 * 20 * -1;
        let trY = raznX / 100 * 20;

        trX = Math.round(trX * 1000) / 1000;
        trY = Math.round(trY * 1000) / 1000;

        $img.css('transform', 'rotateY(' + trY + 'deg) rotateX(' + trX + 'deg) rotateZ(0deg) scale(1.05)');
    }

    function resetTransform() {
        $img.removeClass('parallax-active');
        $img.css('transform', 'rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1)');
    }

    $img.mousemove(function (e) {
        $img = $(this).find('.parallax').prevObject;

        move(e.pageX, e.pageY);
    })
        .mouseout(function (e) {
            resetTransform();
        });
});