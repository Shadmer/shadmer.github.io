$(document).ready(function(){

    let getCarousel = function () {
        $('.brands').owlCarousel({
            loop:true,
            margin:0,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true,

                },
                960:{
                    items:2,
                    nav:true,

                },
                1200:{
                    items:5,
                    nav:true,
                    loop:false,

                }
            }
        });
    };
    if($(window).width() > 1770){
        $('.brands').trigger('destroy.owl.carousel');
    } else {
        getCarousel();
    }
    $(window).resize(function(){
        if($(window).width() > 1770){
            $('.brands').trigger('destroy.owl.carousel');
        } else {
            getCarousel();
        }
    });

});